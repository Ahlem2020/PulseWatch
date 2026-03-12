import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CountryOption {
  code: string;
  name: string;
  coordinates: [number, number];
  zoom: number;
}

export const countries: CountryOption[] = [
  { code: 'WORLD', name: 'World (Global)', coordinates: [0, 20], zoom: 1 },
  { code: 'US', name: 'United States', coordinates: [-95, 40], zoom: 3 },
  { code: 'GB', name: 'United Kingdom', coordinates: [-2, 54], zoom: 5 },
  { code: 'FR', name: 'France', coordinates: [2, 47], zoom: 5 },
  { code: 'DE', name: 'Germany', coordinates: [10, 51], zoom: 5 },
  { code: 'IT', name: 'Italy', coordinates: [12, 43], zoom: 5 },
  { code: 'ES', name: 'Spain', coordinates: [-4, 40], zoom: 5 },
  { code: 'JP', name: 'Japan', coordinates: [138, 36], zoom: 5 },
  { code: 'CN', name: 'China', coordinates: [105, 35], zoom: 3 },
  { code: 'IN', name: 'India', coordinates: [78, 22], zoom: 4 },
  { code: 'BR', name: 'Brazil', coordinates: [-55, -10], zoom: 3 },
  { code: 'AU', name: 'Australia', coordinates: [134, -25], zoom: 3 },
  { code: 'CA', name: 'Canada', coordinates: [-100, 60], zoom: 3 },
  { code: 'RU', name: 'Russia', coordinates: [100, 60], zoom: 2 },
  { code: 'MX', name: 'Mexico', coordinates: [-102, 24], zoom: 4 },
  { code: 'KR', name: 'South Korea', coordinates: [128, 36], zoom: 6 },
  { code: 'SA', name: 'Saudi Arabia', coordinates: [45, 24], zoom: 4 },
  { code: 'AE', name: 'UAE', coordinates: [54, 24], zoom: 6 },
  { code: 'SG', name: 'Singapore', coordinates: [104, 1], zoom: 10 },
  { code: 'NL', name: 'Netherlands', coordinates: [5, 52], zoom: 7 },
  { code: 'SE', name: 'Sweden', coordinates: [18, 62], zoom: 4 },
  { code: 'CH', name: 'Switzerland', coordinates: [8, 47], zoom: 7 },
  { code: 'PL', name: 'Poland', coordinates: [20, 52], zoom: 5 },
  { code: 'TN', name: 'Tunisia', coordinates: [9, 34], zoom: 6 },
  { code: 'EG', name: 'Egypt', coordinates: [30, 27], zoom: 5 },
  { code: 'ZA', name: 'South Africa', coordinates: [25, -29], zoom: 4 },
  { code: 'NG', name: 'Nigeria', coordinates: [8, 10], zoom: 5 },
  { code: 'AR', name: 'Argentina', coordinates: [-64, -34], zoom: 3 },
  { code: 'TR', name: 'Turkey', coordinates: [35, 39], zoom: 5 },
  { code: 'ID', name: 'Indonesia', coordinates: [120, -2], zoom: 4 },
];

interface SettingsState {
  focusedCountry: CountryOption;
  apiToken: string;
  mentionsSync: boolean;
  digitalFingerprint: boolean;
  setFocusedCountry: (country: CountryOption) => void;
  setApiToken: (token: string) => void;
  setMentionsSync: (enabled: boolean) => void;
  setDigitalFingerprint: (enabled: boolean) => void;
  regenerateApiToken: () => void;
}

const generateToken = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length: 32 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      focusedCountry: countries[0], // Default to World
      apiToken: generateToken(),
      mentionsSync: true,
      digitalFingerprint: true,
      setFocusedCountry: (country) => set({ focusedCountry: country }),
      setApiToken: (token) => set({ apiToken: token }),
      setMentionsSync: (enabled) => set({ mentionsSync: enabled }),
      setDigitalFingerprint: (enabled) => set({ digitalFingerprint: enabled }),
      regenerateApiToken: () => set({ apiToken: generateToken() }),
    }),
    {
      name: 'settings-storage',
    }
  )
);
