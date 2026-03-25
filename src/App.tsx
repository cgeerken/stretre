import { useState } from 'react';
import { View } from './types';
import Layout from './components/Layout';
import HomeView from './components/HomeView';
import QuestsView from './components/QuestsView';
import GuildView from './components/GuildView';
import DiaryView from './components/DiaryView';
import LootView from './components/LootView';
import ProfileView from './components/ProfileView';
import RegisterView from './components/RegisterView';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('register');

  const handleRegister = () => {
    setCurrentView('tavern');
  };

  if (currentView === 'register') {
    return <RegisterView onRegister={handleRegister} />;
  }

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      {currentView === 'tavern' && <HomeView onViewChange={setCurrentView} />}
      {currentView === 'quests' && <QuestsView />}
      {currentView === 'guild' && <GuildView />}
      {currentView === 'diary' && <DiaryView />}
      {currentView === 'loot' && <LootView />}
      {currentView === 'profile' && <ProfileView />}
    </Layout>
  );
}
