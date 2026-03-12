import { motion } from 'framer-motion';
import { MentionsFeed } from '../components/Dashboard/MentionsFeed';
import { useDashboardStore } from '../store/dashboardStore';

export function Mentions() {
  const { mentions, searchQuery, selectedPlatform } = useDashboardStore();

  const filteredMentions = mentions.filter((m) => {
    const matchesSearch = searchQuery
      ? m.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.author.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    const matchesPlatform = selectedPlatform === 'all' || m.platform === selectedPlatform;
    return matchesSearch && matchesPlatform;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Mentions</h1>
        <p className="text-muted-foreground">
          {filteredMentions.length} mentions found
        </p>
      </div>
      <MentionsFeed mentions={filteredMentions} />
    </motion.div>
  );
}
