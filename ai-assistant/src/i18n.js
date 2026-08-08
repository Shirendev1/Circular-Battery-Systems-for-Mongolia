/**
 * Internationalization (i18n) Module
 * Handles language switching and translation for MCBI AI Assistant
 * Supports: Mongolian (mn), English (en), Czech (cs)
 */

class I18nManager {
  constructor() {
    this.translations = {};
    this.currentLanguage = this.getStoredLanguage() || 'en';
    this.defaultLanguage = 'en';
  }

  /**
   * Initialize translations from locale files
   * @param {Object} localesMap - Map of language codes to translation objects
   */
  async initializeTranslations(localesMap) {
    this.translations = localesMap;
    console.log('✅ Translations initialized for:', Object.keys(localesMap).join(', '));
  }

  /**
   * Get translation string by key
   * @param {string} key - Dot-notation key (e.g., 'app.title')
   * @param {string} language - Language code (optional, uses current language)
   * @returns {string} Translated text or key if not found
   */
  translate(key, language = this.currentLanguage) {
    const keys = key.split('.');
    let value = this.translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        console.warn(`🔍 Translation not found: ${key} in ${language}`);
        return key; // Return key if translation not found
      }
    }

    return value || key;
  }

  /**
   * Alias for translate method (shorter syntax)
   */
  t(key, language) {
    return this.translate(key, language);
  }

  /**
   * Get all translations for a specific language
   * @param {string} language - Language code
   * @returns {Object} Translation object
   */
  getTranslations(language = this.currentLanguage) {
    return this.translations[language] || this.translations[this.defaultLanguage];
  }

  /**
   * Set current language
   * @param {string} language - Language code (mn, en, cs)
   */
  setLanguage(language) {
    if (this.translations[language]) {
      this.currentLanguage = language;
      this.storeLanguage(language);
      document.documentElement.lang = language;
      this.notifyListeners('languageChanged', language);
      console.log(`🌍 Language changed to: ${language}`);
    } else {
      console.error(`❌ Language not supported: ${language}`);
    }
  }

  /**
   * Get current language
   * @returns {string} Current language code
   */
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  /**
   * Get list of supported languages
   * @returns {Array} Array of language codes
   */
  getSupportedLanguages() {
    return Object.keys(this.translations);
  }

  /**
   * Store language preference in localStorage
   * @private
   */
  storeLanguage(language) {
    try {
      localStorage.setItem('mcbi_language', language);
    } catch (e) {
      console.warn('⚠️ localStorage not available:', e);
    }
  }

  /**
   * Retrieve stored language preference
   * @private
   */
  getStoredLanguage() {
    try {
      return localStorage.getItem('mcbi_language');
    } catch (e) {
      console.warn('⚠️ localStorage not available:', e);
      return null;
    }
  }

  /**
   * Detect browser language and set if supported
   */
  detectBrowserLanguage() {
    const browserLang = navigator.language.split('-')[0].toLowerCase();
    if (this.translations[browserLang]) {
      this.setLanguage(browserLang);
      console.log(`🔍 Browser language detected: ${browserLang}`);
    } else {
      this.setLanguage(this.defaultLanguage);
    }
  }

  /**
   * Language change event listeners
   */
  listeners = [];

  /**
   * Subscribe to language change events
   * @param {string} event - Event type
   * @param {Function} callback - Callback function
   */
  on(event, callback) {
    this.listeners.push({ event, callback });
  }

  /**
   * Notify all listeners of event
   * @private
   */
  notifyListeners(event, data) {
    this.listeners
      .filter(l => l.event === event)
      .forEach(l => l.callback(data));
  }

  /**
   * Get language display information
   * @param {string} language - Language code
   * @returns {Object} Language info
   */
  getLanguageInfo(language = this.currentLanguage) {
    const info = {
      mn: { name: 'Mongolian', native: 'Монгол', direction: 'ltr' },
      en: { name: 'English', native: 'English', direction: 'ltr' },
      cs: { name: 'Czech', native: 'Čeština', direction: 'ltr' }
    };
    return info[language] || info['en'];
  }
}

// Export for use in applications
if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18nManager;
}
