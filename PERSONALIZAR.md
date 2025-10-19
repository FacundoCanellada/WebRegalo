# 📝 GUÍA PARA PERSONALIZAR TU REGALO

## 🎨 **1. CAMBIAR LOS MENSAJES DE LOS PÉTALOS**

Abre `script.js` y busca las líneas 2-10:

```javascript
const frases = [
    "Eres la luz que ilumina mis días más oscuros.",      // PÉTALO 1
    "En tus ojos encuentro el universo completo.",        // PÉTALO 2
    "Cada momento contigo es un regalo del destino.",     // PÉTALO 3
    "Tu sonrisa es la melodía favorita de mi corazón.",   // PÉTALO 4
    "Contigo el tiempo se detiene y la vida cobra sentido.", // PÉTALO 5
    "Eres el sueño que nunca quiero despertar.",          // PÉTALO 6
    "Tu amor es la poesía que mi alma siempre buscó.",    // PÉTALO 7
    "En tus brazos encontré mi hogar."                    // PÉTALO 8
];
```

**Cambia cada frase** entre las comillas por tus propios mensajes.

---

## 💌 **2. CAMBIAR EL MENSAJE DE LA CARTA DE ENTRADA**

Abre `index.html` y busca las líneas 34-40:

```html
<h1 class="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400">
        Tengo un regalo especial para ti
    </span>
</h1>
<p class="text-white/60 text-lg animate-fade-in-delay">
    Haz clic en la carta para descubrirlo 💌
</p>
```

**Cambia:**
- `"Tengo un regalo especial para ti"` → Tu mensaje
- `"Haz clic en la carta para descubrirlo 💌"` → Tu instrucción

---

## 🌹 **3. CAMBIAR EL TÍTULO "FELIZ CUMPLEAÑOS"**

Abre `index.html` y busca la línea 56:

```html
<h1 class="text-4xl md:text-6xl font-bold text-white text-center mb-2 animate-fade-in" style="font-family: 'Playfair Display', serif; letter-spacing: 2px;">
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400">
        Feliz Cumpleaños
    </span>
</h1>
```

**Cambia:**
- `"Feliz Cumpleaños"` → Tu título (ej: "Te Amo", "Para Ti", "Mi Amor", etc.)

---

## 🎯 **4. CAMBIAR INSTRUCCIÓN DE LOS PÉTALOS**

Línea 62 de `index.html`:

```html
<p class="text-white/80 text-base md:text-lg mb-8 text-center max-w-md animate-fade-in-delay">
    Haz clic en cada pétalo de la rosa para leer un mensaje 🌹
</p>
```

**Cambia:**
- `"Haz clic en cada pétalo de la rosa para leer un mensaje 🌹"` → Tu instrucción

---

## 🎉 **5. CAMBIAR EL MENSAJE FINAL**

Abre `script.js` y busca las líneas 255-268:

```javascript
modal.innerHTML = `
    <div class="final-card">
        <div class="final-emoji">🎉</div>
        <h2 class="final-title">¡Has descubierto todos los mensajes!</h2>
        <p class="final-message">
            Cada pétalo llevaba un pedacito de mi corazón.<br>
            Que este día sea tan especial como tú lo eres para mí.
        </p>
        <div class="final-emoji">💖</div>
        <p class="final-message" style="font-size: 1.3rem; margin-top: 1rem;">
            ¡Feliz Cumpleaños!
        </p>
        <button class="reload-button">Volver a empezar 🔄</button>
    </div>
`;
```

**Cambia:**
- `"¡Has descubierto todos los mensajes!"` → Tu título final
- `"Cada pétalo llevaba un pedacito de mi corazón..."` → Tu mensaje
- `"¡Feliz Cumpleaños!"` → Tu mensaje final
- Emojis: 🎉 💖 → Los que quieras

---

## 🎨 **6. CAMBIAR LAS FUENTES (OPCIONAL)**

Si no te gustan las fuentes actuales, en `styles.css` línea 2:

**Fuentes actuales:**
- **Poppins** → Texto general (moderna, legible)
- **Playfair Display** → Títulos grandes (elegante)
- **Satisfy** → Mensajes románticos (cursiva legible)

**Para cambiar:**
1. Ve a [Google Fonts](https://fonts.google.com/)
2. Busca la fuente que te guste
3. Copia el link de importación
4. Reemplaza la línea 2 de `styles.css`

---

## 🎵 **7. CAMBIAR LA CANCIÓN**

**Ya explicado en `INSTRUCCIONES_MUSICA.md`**

Resumen rápido:
1. Descarga el MP3 de la canción que quieras
2. Guárdalo como `music.mp3` en la carpeta del proyecto
3. En `script.js` línea ~327: cambia `audio.src = 'music.mp3';`

---

## 🚀 **CÓMO PUBLICAR Y COMPARTIR**

### **OPCIÓN 1: GitHub Pages (GRATIS)** ⭐

#### Paso 1: Subir a GitHub
```bash
# En la terminal (en la carpeta WebRegalo):
git add .
git commit -m "Personalización completada"
git push origin main
```

#### Paso 2: Activar GitHub Pages
1. Ve a tu repositorio en GitHub: `https://github.com/TU-USUARIO/WebRegalo`
2. Click en **Settings** (arriba)
3. En el menú izquierdo → **Pages**
4. En "Branch" selecciona **main** → **Save**
5. Espera 1-2 minutos

#### Paso 3: Obtener tu URL
Tu regalo estará en:
```
https://TU-USUARIO.github.io/WebRegalo/
```

**Ejemplo:** Si tu usuario es "juanperez", será:
```
https://juanperez.github.io/WebRegalo/
```

---

### **OPCIÓN 2: Netlify (MÁS FÁCIL)** 🚀

1. Ve a [netlify.com](https://www.netlify.com/)
2. Regístrate gratis
3. Click en **"Add new site"** → **"Deploy manually"**
4. Arrastra toda tu carpeta `WebRegalo` (con los 3 archivos)
5. ¡Listo! Te da una URL automáticamente

**Personalizar URL:**
- En "Site settings" → "Change site name"
- Ponle: `regalo-para-maria` (ejemplo)
- Tu URL será: `https://regalo-para-maria.netlify.app`

---

### **OPCIÓN 3: Vercel (PROFESIONAL)** ⚡

1. Ve a [vercel.com](https://vercel.com/)
2. Regístrate con tu cuenta de GitHub
3. Click en **"Add New"** → **"Project"**
4. Selecciona el repositorio `WebRegalo`
5. Click en **"Deploy"**

Tu URL será: `https://webregalo.vercel.app`

---

## 📱 **CÓMO COMPARTIR EL REGALO**

Una vez publicado, puedes:

### **1. Enviar por WhatsApp**
```
¡Hola! Tengo un regalo especial para ti 💖
Abre este link: https://tu-url-aqui.com
```

### **2. Crear un código QR**
1. Ve a [qr-code-generator.com](https://www.qr-code-generator.com/)
2. Pega tu URL
3. Descarga el código QR
4. Imprímelo en una tarjeta

### **3. Enviar por email**
```
Asunto: Un regalo especial para ti ❤️

Hola [Nombre],

He preparado algo especial para ti.
Haz clic aquí: https://tu-url-aqui.com

Con amor,
[Tu nombre]
```

---

## ⚠️ **IMPORTANTE ANTES DE PUBLICAR**

### ✅ **Checklist final:**

- [ ] Cambié todos los mensajes de los pétalos
- [ ] Personalicé el mensaje de entrada
- [ ] Cambié el título principal
- [ ] Modifiqué el mensaje final
- [ ] Agregué el archivo `music.mp3`
- [ ] Probé que funcione en mi computadora
- [ ] Subí todo a GitHub/Netlify/Vercel
- [ ] Probé la URL en mi teléfono
- [ ] ¡Todo listo para regalar! 🎁

---

## 🆘 **PROBLEMAS COMUNES**

### La música no suena
- Verifica que `music.mp3` esté en la carpeta
- Asegúrate que el archivo se llame exactamente `music.mp3`
- En algunos navegadores debes hacer clic primero para que suene

### La página no carga
- Verifica que todos los archivos estén en la misma carpeta
- Chequea que los nombres sean exactos (sensible a mayúsculas)

### No puedo hacer git push
- Revisa `INSTRUCCIONES_GIT.md` en este mismo proyecto
- O usa la opción de Netlify (más fácil, solo arrastrar)

---

## 💡 **CONSEJOS FINALES**

1. **Prueba todo antes** de enviar el link
2. **Abre en modo incógnito** para simular que eres la otra persona
3. **Prueba en celular** para asegurarte que se vea bien
4. **Copia el link** antes de enviarlo para no equivocarte
5. **Guarda el link** por si lo necesitas después

---

## 🎁 **¡YA ESTÁ LISTO!**

Tu regalo personalizado está completo. Solo falta:
1. Publicarlo
2. Compartir el link
3. Esperar la reacción 😊💖

**¡Mucha suerte!** ✨

---

**¿Necesitas ayuda?** Revisa los otros archivos `.md` en esta carpeta.
