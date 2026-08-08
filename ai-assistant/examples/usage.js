/**
 * MCBI Multilingual AI Assistant - Usage Examples
 * Demonstrates how to use the assistant with different languages
 */

const MCBIAssistant = require('../src/assistant');
const translations = {
  mn: require('../locales/mn.json'),
  en: require('../locales/en.json'),
  cs: require('../locales/cs.json')
};

// Initialize assistant
const assistant = new MCBIAssistant();

// Example 1: Basic initialization and greeting
async function exampleBasicUsage() {
  console.log('\n📱 Example 1: Basic Usage');
  console.log('='.repeat(50));

  await assistant.initialize(translations);
  console.log(assistant.greet());
}

// Example 2: Language switching
function exampleLanguageSwitching() {
  console.log('\n🌐 Example 2: Language Switching');
  console.log('='.repeat(50));

  const languages = ['en', 'mn', 'cs'];
  const langNames = { en: 'English', mn: 'Mongolian', cs: 'Czech' };

  languages.forEach(lang => {
    assistant.setLanguage(lang);
    console.log(`\n🇲🇳 ${langNames[lang]}:`);
    console.log(`  Title: ${assistant.i18n.t('app.title')}`);
    console.log(`  Description: ${assistant.i18n.t('app.description')}`);
  });
}

// Example 3: Get MCBI information
function exampleMCBIInfo() {
  console.log('\n🔋 Example 3: MCBI Information');
  console.log('='.repeat(50));

  assistant.setLanguage('en');
  const info = assistant.getMCBIInfo();
  console.log('\n📋 English:');
  Object.entries(info).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
  });

  assistant.setLanguage('mn');
  const infoMN = assistant.getMCBIInfo();
  console.log('\n📋 Mongolian:');
  Object.entries(infoMN).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
  });
}

// Example 4: Process user messages
function exampleMessageProcessing() {
  console.log('\n💬 Example 4: Message Processing');
  console.log('='.repeat(50));

  const testMessages = [
    { msg: 'Hello, what is MCBI?', lang: 'en' },
    { msg: 'Батерейн сэргээн боловсруулалтын талаар', lang: 'mn' },
    { msg: 'Jak funguje recyklace?', lang: 'cs' }
  ];

  testMessages.forEach(({ msg, lang }) => {
    assistant.setLanguage(lang);
    console.log(`\n👤 User (${lang}): ${msg}`);
    const response = assistant.processMessage(msg);
    console.log(`🤖 Assistant: ${response}`);
  });
}

// Example 5: Available languages
function exampleLanguageList() {
  console.log('\n📚 Example 5: Supported Languages');
  console.log('='.repeat(50));

  const languages = assistant.getAvailableLanguages();
  console.log(`\nSupported languages: ${languages.join(', ')}`);

  languages.forEach(lang => {
    const info = assistant.i18n.getLanguageInfo(lang);
    console.log(`  - ${info.name} (${info.native})`);
  });
}

// Example 6: Conversation history
function exampleConversationHistory() {
  console.log('\n📖 Example 6: Conversation History');
  console.log('='.repeat(50));

  assistant.setLanguage('en');
  assistant.processMessage('What about innovation?');
  assistant.processMessage('Tell me about sustainability');

  const history = assistant.getHistory();
  console.log(`\nConversation history (${history.length} messages):`);
  history.forEach((entry, index) => {
    console.log(`  ${index + 1}. [${entry.role}] ${entry.message}`);
  });
}

// Run all examples
async function runAllExamples() {
  try {
    await exampleBasicUsage();
    exampleLanguageSwitching();
    exampleMCBIInfo();
    exampleMessageProcessing();
    exampleLanguageList();
    exampleConversationHistory();

    console.log('\n' + '='.repeat(50));
    console.log('✅ All examples completed successfully!');
  } catch (error) {
    console.error('❌ Error running examples:', error);
  }
}

// Export examples
module.exports = { runAllExamples };

// Run if executed directly
if (require.main === module) {
  runAllExamples();
}
