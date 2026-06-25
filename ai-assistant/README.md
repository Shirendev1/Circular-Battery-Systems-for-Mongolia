# MCBI Multilingual AI Assistant

## 🌍 Overview

The **MCBI Multilingual AI Assistant** is an intelligent language-aware system designed to support Mongolia's Circular Battery Initiative (MCBI) with native support for three languages:

- 🇲🇳 **Mongolian** (mn)
- 🇬🇧 **English** (en)
- 🇨🇿 **Czech** (cs)

## 🎯 Features

✅ **Multilingual Support** - Seamless switching between 3 languages  
✅ **I18n Management** - Complete internationalization system  
✅ **Conversation History** - Track user interactions  
✅ **Language Detection** - Auto-detect browser language  
✅ **Persistent Preferences** - Save language selection  
✅ **MCBI-Specific Content** - Tailored responses for battery system queries  
✅ **Event System** - Listen to language change events  

## 📁 Project Structure

```
ai-assistant/
├── config/
│   └── languages.json          # Language configuration
├── locales/
│   ├── mn.json                 # Mongolian translations
│   ├── en.json                 # English translations
│   └── cs.json                 # Czech translations
├── src/
│   ├── i18n.js                 # Internationalization manager
│   └── assistant.js            # Main AI assistant class
├── examples/
│   └── usage.js                # Usage examples
├── tests/                       # Unit tests (coming soon)
└── README.md                    # This file
```

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/Shirendev1/Circular-Battery-Systems-for-Mongolia.git

# Navigate to assistant directory
cd ai-assistant

# Install dependencies
npm install
```

### Basic Usage

```javascript
const MCBIAssistant = require('./src/assistant');
const translations = {
  mn: require('./locales/mn.json'),
  en: require('./locales/en.json'),
  cs: require('./locales/cs.json')
};

// Initialize
const assistant = new MCBIAssistant();
await assistant.initialize(translations);

// Use in English
assistant.setLanguage('en');
console.log(assistant.greet()); // "Welcome! - MCBI Smart Assistant"

// Switch to Mongolian
assistant.setLanguage('mn');
console.log(assistant.greet()); // "Тавтай морилно уу! - MCBI ухаалаг туслах"

// Process user message
const response = assistant.processMessage('Tell me about batteries');
console.log(response);
```

## 🌐 Language Switching

```javascript
// Get available languages
const languages = assistant.getAvailableLanguages();
console.log(languages); // ['mn', 'en', 'cs']

// Switch language
assistant.setLanguage('cs');
console.log(assistant.i18n.t('app.title')); // "MCBI Inteligentní Asistent"

// Get current language
const current = assistant.getLanguage();
console.log(current); // 'cs'
```

## 📚 Translation System

### Adding New Translations

1. Create a new locale file: `locales/{language-code}.json`
2. Follow the structure of existing files:

```json
{
  "app": {
    "title": "Your Title",
    "description": "Your Description"
  },
  "buttons": {
    "start": "Start Button"
  }
}
```

3. Register in `config/languages.json`

### Accessing Translations

```javascript
// Dot notation
const title = assistant.i18n.t('app.title');

// With specific language
const titleMN = assistant.i18n.t('app.title', 'mn');

// Get all translations for a language
const allEN = assistant.i18n.getTranslations('en');
```

## 💬 Message Processing

The assistant can handle various message types:

```javascript
// MCBI-related queries
assistant.processMessage('Tell me about batteries');
assistant.processMessage('Recycling process');
assistant.processMessage('Innovation in MCBI');
assistant.processMessage('Sustainability goals');

// Get conversation history
const history = assistant.getHistory();
history.forEach(entry => {
  console.log(`[${entry.role}] ${entry.message}`);
});
```

## 🔧 Advanced Features

### Language Change Events

```javascript
assistant.i18n.on('languageChanged', (language) => {
  console.log(`Language changed to: ${language}`);
  updateUI(); // Update your UI
});
```

### Browser Language Detection

```javascript
// Auto-detect and set language based on browser settings
assistant.i18n.detectBrowserLanguage();
```

### Language Information

```javascript
const info = assistant.i18n.getLanguageInfo('cs');
console.log(info);
// Output: { name: 'Czech', native: 'Čeština', direction: 'ltr' }
```

## 🧪 Running Examples

```bash
node examples/usage.js
```

This will run all example scenarios:
1. Basic initialization
2. Language switching
3. MCBI information retrieval
4. Message processing
5. Language listing
6. Conversation history

## 📊 Supported Translations

| Key | Mongolian | English | Czech |
|-----|-----------|---------|-------|
| app.title | MCBI ухаалаг туслах | MCBI Smart Assistant | MCBI Inteligentní Asistent |
| app.welcome | Тавтай морилно уу! | Welcome! | Vítejte! |
| app.description | MCBI нь Монголын батерейн тойрог эдийн засгийн санаачилгад зориулсан ухаалаг туслах. | Intelligent assistant for Mongolia's Circular Battery System | Inteligentní asistent pro mongolský Systém Cirkulárních Baterií |
| buttons.start | Эхлүүлэх | Start | Začít |
| buttons.save | Хадгалах | Save | Uložit |
| mcbi.title | MCBI-Тойрог батерейн системүүд | MCBI - Circular Battery Systems | MCBI - Systémy Cirkulárních Baterií |
| mcbi.description | Монгол улсад батерейн тойрог эдийн засаг, дахин боловсруулалт, байгаль орчны хамгааллыг хөгжүүлэх санаачилга | Strategic framework for Mongolia's circular battery lifecycle system | Strategický rámec pro mongolský systém životního cyklu cirkulárních baterií |

## 🔐 Security & Best Practices

- ✅ Input validation for language codes
- ✅ Fallback to default language if not found
- ✅ Graceful error handling
- ✅ localStorage fallback for persistent preferences
- ✅ No external API dependencies (standalone)

## 💡 Use Cases

1. **User Support** - Multi-language customer support chatbot
2. **Educational** - Learning about Mongolia's battery system in preferred language
3. **Policy Documentation** - MCBI information accessible to EU partners (Czech) and local stakeholders (Mongolian)
4. **Web Application** - Add multilingual support to MCBI dashboard
5. **API Integration** - Embed in larger applications

## 🚀 Roadmap

- [ ] Add more languages (Russian, Chinese, French)
- [ ] NLP-based intent matching
- [ ] Database integration for conversations
- [ ] API endpoint for remote deployment
- [ ] React/Vue component wrappers
- [ ] Unit tests and CI/CD pipeline
- [ ] Performance optimization

## 📝 Contributing

Contributions are welcome! To add a new language:

1. Create a translation file in `locales/`
2. Update `config/languages.json`
3. Test with the examples
4. Submit a pull request

## 📄 License

MIT License - See LICENSE file for details

## 📞 Contact & Support

- **GitHub**: [@Shirendev1](https://github.com/Shirendev1)
- **Repository**: [Circular-Battery-Systems-for-Mongolia](https://github.com/Shirendev1/Circular-Battery-Systems-for-Mongolia)
- **Issue Tracker**: GitHub Issues

## 🙏 Acknowledgments

This assistant was created as part of the **MCBI (Mongolia's Circular Battery Initiative)** to support sustainable battery lifecycle management and international cooperation.

---

**Status**: ✅ Production Ready | **Last Updated**: June 2026 | **Languages**: MN, EN, CS
