/**
 * MCBI Multilingual AI Assistant
 * Main assistant class for handling language-aware interactions
 * Supports: Mongolian, English, Czech
 */

const I18nManager = require('./i18n');

class MCBIAssistant {
  constructor() {
    this.i18n = new I18nManager();
    this.conversationHistory = [];
    this.isInitialized = false;
  }

  /**
   * Initialize the assistant with translations
   * @param {Object} translations - Translation object with locale data
   */
  async initialize(translations) {
    try {
      await this.i18n.initializeTranslations(translations);
      this.isInitialized = true;
      console.log('✅ MCBI Assistant initialized successfully');
      return true;
    } catch (error) {
      console.error('❌ Initialization failed:', error);
      return false;
    }
  }

  /**
   * Change assistant language
   * @param {string} language - Language code (mn, en, cs)
   */
  setLanguage(language) {
    this.i18n.setLanguage(language);
  }

  /**
   * Get greeting message in current language
   * @returns {string} Greeting message
   */
  greet() {
    const greeting = this.i18n.t('app.welcome');
    const title = this.i18n.t('app.title');
    return `${greeting} - ${title}`;
  }

  /**
   * Get MCBI system information in current language
   * @returns {Object} MCBI information
   */
  getMCBIInfo() {
    return {
      title: this.i18n.t('mcbi.title'),
      description: this.i18n.t('mcbi.description'),
      objectives: this.i18n.t('mcbi.objectives'),
      sustainability: this.i18n.t('mcbi.sustainability'),
      recycling: this.i18n.t('mcbi.recycling'),
      innovation: this.i18n.t('mcbi.innovation')
    };
  }

  /**
   * Process user message and generate response
   * @param {string} message - User input message
   * @returns {string} Assistant response
   */
  processMessage(message) {
    if (!this.isInitialized) {
      return this.i18n.t('messages.error');
    }

    // Add to conversation history
    this.conversationHistory.push({
      role: 'user',
      message: message,
      language: this.i18n.getCurrentLanguage(),
      timestamp: new Date()
    });

    // Simple intent matching
    const lowerMessage = message.toLowerCase();
    let response = '';

    if (this._matchesIntent(lowerMessage, ['hello', 'hi', 'привет', 'nhỏ', 'тавтай', 'батерей', 'system']))
      response = this.greet();
    else if (this._matchesIntent(lowerMessage, ['battery', 'батерей', 'baterie', 'аккумулятор']))
      response = this.i18n.t('mcbi.title');
    else if (this._matchesIntent(lowerMessage, ['recycle', 'сэргээн', 'recyklace', 'сэргээн']))
      response = this.i18n.t('mcbi.recycling');
    else if (this._matchesIntent(lowerMessage, ['sustainable', 'төрөлтэй', 'udržitelné']))
      response = this.i18n.t('mcbi.sustainability');
    else
      response = this._generateDefaultResponse();

    // Add assistant response to history
    this.conversationHistory.push({
      role: 'assistant',
      message: response,
      language: this.i18n.getCurrentLanguage(),
      timestamp: new Date()
    });

    return response;
  }

  /**
   * Check if message matches intent keywords
   * @private
   */
  _matchesIntent(message, keywords) {
    return keywords.some(keyword => message.includes(keyword.toLowerCase()));
  }

  /**
   * Generate default response
   * @private
   */
  _generateDefaultResponse() {
    const responses = {
      mn: "Тойрог батерейн эдийн засаг, дахин ашиглалт, дахин боловсруулалтын талаар асуугаарай",
      en: 'I can help with questions about recycling, circular batteries, or innovation in the MCBI system.',
      cs: 'Mohu vám pomoci s otázkami o recyklaci, cirkulárních bateriích nebo inovacích v systému MCBI.'
    };
    const lang = this.i18n.getCurrentLanguage();
    return responses[lang] || responses['en'];
  }

  /**
   * Get conversation history
   * @returns {Array} Conversation history
   */
  getHistory() {
    return this.conversationHistory;
  }

  /**
   * Clear conversation history
   */
  clearHistory() {
    this.conversationHistory = [];
  }

  /**
   * Get current language
   * @returns {string} Language code
   */
  getLanguage() {
    return this.i18n.getCurrentLanguage();
  }

  /**
   * Get available languages
   * @returns {Array} Supported language codes
   */
  getAvailableLanguages() {
    return this.i18n.getSupportedLanguages();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MCBIAssistant;
}
