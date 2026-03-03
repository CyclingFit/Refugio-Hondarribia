import { useEffect, useState } from "react";
import {
  Cloud, CloudDrizzle, CloudLightning, CloudRain, CloudSnow,
  CloudSun, Droplets, Sun, Thermometer, Wind, Eye, Gauge
} from "lucide-react";

const LATITUDE = 43.3919;
const LONGITUDE = -1.7919;
const ALTITUDE = 40;

interface WeatherData {
  temperature: number;
  windSpeed: number;
  humidity: number;
  weatherCode: number;
  apparentTemperature: number;
  precipitation: number;
  pressure: number;
  visibility: number;
  daily: {
    tempMax: number[];
    tempMin: number[];
    weatherCode: number[];
    date: string[];
  };
}

const weatherDescriptions: Record<number, { label: string; icon: typeof Sun }> = {
  0: { label: "Despejado", icon: Sun },
  1: { label: "Mayormente despejado", icon: CloudSun },
  2: { label: "Parcialmente nublado", icon: CloudSun },
  3: { label: "Nublado", icon: Cloud },
  45: { label: "Niebla", icon: Cloud },
  48: { label: "Niebla helada", icon: CloudSnow },
  51: { label: "Llovizna ligera", icon: CloudDrizzle },
  53: { label: "Llovizna moderada", icon: CloudDrizzle },
  55: { label: "Llovizna intensa", icon: CloudDrizzle },
  61: { label: "Lluvia ligera", icon: CloudRain },
  63: { label: "Lluvia moderada", icon: CloudRain },
  65: { label: "Lluvia intensa", icon: CloudRain },
  71: { label: "Nieve ligera", icon: CloudSnow },
  73: { label: "Nieve moderada", icon: CloudSnow },
  75: { label: "Nieve intensa", icon: CloudSnow },
  77: { label: "Granizo", icon: CloudSnow },
  80: { label: "Chubascos ligeros", icon: CloudRain },
  81: { label: "Chubascos moderados", icon: CloudRain },
  82: { label: "Chubascos fuertes", icon: CloudRain },
  85: { label: "Chubascos de nieve", icon: CloudSnow },
  86: { label: "Chubascos de nieve fuertes", icon: CloudSnow },
  95: { label: "Tormenta", icon: CloudLightning },
  96: { label: "Tormenta con granizo", icon: CloudLightning },
  99: { label: "Tormenta fuerte con granizo", icon: CloudLightning },
};

function getWeatherInfo(code: number) {
  return weatherDescriptions[code] ?? { label: "Desconocido", icon: Cloud };
}

function getDayName(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = date.getTime() - today.getTime();
  const days = Math.round(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Hoy";
  if (days === 1) return "Mañana";
  return date.toLocaleDateString("es-ES", { weekday: "short" }).replace(".", "");
}

/** Widget de meteorología en tiempo real usando Open-Meteo */
const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&elevation=${ALTITUDE}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,surface_pressure,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe/Madrid&forecast_days=5`
        );
        const data = await res.json();
        setWeather({
          temperature: data.current.temperature_2m,
          windSpeed: data.current.wind_speed_10m,
          humidity: data.current.relative_humidity_2m,
          weatherCode: data.current.weather_code,
          apparentTemperature: data.current.apparent_temperature,
          precipitation: data.current.precipitation,
          pressure: Math.round(data.current.surface_pressure),
          visibility: Math.round(data.current.visibility / 1000),
          daily: {
            tempMax: data.daily.temperature_2m_max,
            tempMin: data.daily.temperature_2m_min,
            weatherCode: data.daily.weather_code,
            date: data.daily.time,
          },
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="rounded-xl border border-border bg-card p-4 sm:p-6 animate-pulse">
        <div className="h-6 w-48 bg-muted rounded mb-4" />
        <div className="h-16 w-32 bg-muted rounded mb-4" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-12 bg-muted rounded" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 sm:p-6 text-center">
        <Cloud className="w-8 h-8 sm:w-10 sm:h-10 text-destructive mx-auto mb-2" />
        <p className="text-sm text-destructive font-medium">No se pudo obtener la previsión</p>
        <p className="text-xs text-muted-foreground mt-1">Comprueba tu conexión a Internet</p>
      </div>
    );
  }

  const currentInfo = getWeatherInfo(weather.weatherCode);
  const CurrentIcon = currentInfo.icon;

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {/* Current weather */}
      <div className="bg-gradient-to-br from-primary/10 via-card to-accent/5 p-4 sm:p-5 md:p-6">
        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-muted-foreground mb-2 sm:mb-3">
          <Gauge className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
          <span className="truncate">Refugio de Hondarribia · {ALTITUDE} m · Tiempo real</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              {Math.round(weather.temperature)}°
            </p>
            <p className="text-sm sm:text-base md:text-lg font-medium text-foreground/80 mt-1 truncate">
              {currentInfo.label}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Sensación: {Math.round(weather.apparentTemperature)}°C
            </p>
          </div>
          <CurrentIcon className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-primary/60 flex-shrink-0" />
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
        {[
          { icon: Wind, label: "Viento", value: `${Math.round(weather.windSpeed)} km/h` },
          { icon: Droplets, label: "Humedad", value: `${weather.humidity}%` },
          { icon: Eye, label: "Visibilidad", value: `${weather.visibility} km` },
          { icon: Thermometer, label: "Presión", value: `${weather.pressure} hPa` },
        ].map((stat) => (
          <div key={stat.label} className="bg-card p-2.5 sm:p-3 md:p-4 flex flex-col items-center gap-0.5 sm:gap-1">
            <stat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
            <span className="text-xs sm:text-sm font-semibold text-foreground">{stat.value}</span>
            <span className="text-[10px] sm:text-[11px] text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* 5-day forecast */}
      <div className="p-3 sm:p-4 md:p-5 border-t border-border">
        <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-3">
          Próximos 5 días
        </p>
        <div className="grid grid-cols-5 gap-1 sm:gap-2">
          {weather.daily.date.map((date, i) => {
            const info = getWeatherInfo(weather.daily.weatherCode[i]);
            const DayIcon = info.icon;
            return (
              <div key={date} className="flex flex-col items-center gap-0.5 sm:gap-1 p-1.5 sm:p-2 rounded-lg bg-muted/50">
                <span className="text-[10px] sm:text-xs font-medium text-foreground capitalize truncate w-full text-center">
                  {getDayName(date)}
                </span>
                <DayIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary/70" />
                <div className="text-center whitespace-nowrap">
                  <span className="text-[10px] sm:text-xs font-bold text-foreground">
                    {Math.round(weather.daily.tempMax[i])}°
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-muted-foreground ml-0.5">
                    {Math.round(weather.daily.tempMin[i])}°
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
