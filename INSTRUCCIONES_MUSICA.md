# 🎵 Instrucciones para agregar la música

## Opción 1: Usar un archivo de audio local (Recomendada)

### Paso 1: Descargar el audio
1. Ve a un convertidor de YouTube a MP3 como:
   - https://ytmp3.nu/
   - https://y2mate.com/
   - https://www.yt-download.org/

2. Pega la URL: `https://www.youtube.com/watch?v=-BQEgMfeVYI`

3. Descarga el archivo MP3

### Paso 2: Agregar el archivo al proyecto
1. Coloca el archivo MP3 en la carpeta `WebRegalo`
2. Renómbralo a algo simple como: `musica.mp3`

### Paso 3: Actualizar el código
En `script.js`, línea ~405, cambia:
```javascript
// audio.src = 'ruta-a-tu-audio.mp3';
```
Por:
```javascript
audio.src = 'musica.mp3';
```

---

## Opción 2: Usar un servicio de hosting de audio

### Servicios gratuitos:
- **SoundCloud**: Sube el audio y obtén el link
- **Google Drive**: Sube el MP3 y obtén link de descarga directa
- **Dropbox**: Similar a Drive

### En el código:
```javascript
audio.src = 'URL-DIRECTA-DEL-AUDIO.mp3';
```

---

## 📝 Agregar las letras de la canción

En `script.js`, línea ~28, reemplaza el array `lyrics` con las frases de la canción:

```javascript
const lyrics = [
    "Primera línea de la canción...",
    "Segunda línea...",
    "Tercera línea...",
    "Y así sucesivamente..."
];
```

**Nota:** Por copyright, no puedo incluir las letras automáticamente. Búscalas en:
- https://genius.com/
- https://www.letras.com/

---

## ⚙️ Ajustes opcionales

### Cambiar el tiempo de cada letra (actualmente 8 segundos):
En `script.js`, línea ~430:
```javascript
}, 8000); // Cambiar a los milisegundos que quieras (5000 = 5 seg)
```

### Cambiar el segundo de inicio (actualmente 0:13):
En `script.js`, línea ~393:
```javascript
audio.currentTime = 13; // Cambiar al segundo que quieras
```

### Ajustar el volumen:
En `script.js`, después de la línea ~393, agrega:
```javascript
audio.volume = 0.5; // 0.0 a 1.0 (50% = 0.5)
```

---

## ✅ Verificar que funciona

1. Guarda todos los archivos
2. Abre `index.html` en el navegador
3. Haz clic en la carta
4. La música debería empezar automáticamente
5. Las letras aparecerán sutilmente en el fondo
6. Usa el botón 🔊 para pausar/reanudar
7. Usa el botón 🎵 para abrir el video de YouTube

---

## ⚠️ Problemas comunes

### La música no se reproduce automáticamente
**Motivo:** Los navegadores bloquean reproducción automática.

**Solución:** El usuario debe interactuar primero (clic en la carta ya cuenta).

### No encuentra el archivo de audio
**Verifica:**
- Que `musica.mp3` esté en la misma carpeta que `index.html`
- Que el nombre del archivo coincida exactamente (sensible a mayúsculas)

### Las letras no cambian
**Verifica:**
- Que hayas agregado más de una línea en el array `lyrics`
- Que la música se esté reproduciendo

---

## 🚀 Subir todo a GitHub

Cuando subas el proyecto:

```bash
git add .
git commit -m "Agregar música de fondo"
git push origin main
```

**IMPORTANTE:** Si el archivo MP3 es muy grande (>100MB), GitHub lo rechazará. En ese caso, usa la Opción 2 (hosting externo).

---

¿Necesitas ayuda? Avísame! 😊
