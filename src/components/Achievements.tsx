import Link from 'next/link'

export default function Achievements() {
  const achievements = [
    {
      title: 'GitHub Achievements',
      badges: [
        { name: 'Pair Extraordinaire', icon: '👥' },
        { name: 'Pull Shark', icon: '🦈' },
        { name: 'YOLO', icon: '⚡' }
      ]
    }
  ]

  const hacktoberfest = [
    { year: '2025', level: 'Supercontributor', special: true },
    { year: '2025', level: 'Tree Planted 🌳', special: true },
    { year: '2025', level: 'Level 4' },
    { year: '2025', level: 'Level 3' },
    { year: '2025', level: 'Level 2' },
    { year: '2025', level: 'Level 1' },
    { year: '2025', level: 'Level 0 Registered' },
    { year: '2023', level: 'Registered' }
  ]

  const holopinBadges = [
    { name: 'Early Bird Pegasaurus', org: 'Holopin', type: 'Limited' },
    { name: 'ILLA Hacktoberfest 2023', org: 'ILLA Cloud', type: 'Limited' },
    { name: 'Appwrite Hacktoberfest 2023', org: 'Appwrite', type: 'Limited' },
    { name: 'DigitalOcean Smiley', org: 'DigitalOcean', type: 'Limited' },
    { name: '10 Badge Club', org: 'Holopin x Hacktoberfest', type: 'Limited' },
    { name: '5 Badge Club', org: 'Holopin x Hacktoberfest', type: 'Limited' },
    { name: '1 Badge Club', org: 'Holopin x Hacktoberfest', type: 'Limited' }
  ]

  const openSource = [
    {
      project: 'Meshery',
      org: 'meshery',
      stars: '9.4k',
      contributions: 'Active Contributor',
      logo: '☸️'
    },
    {
      project: 'Pollinations',
      org: 'pollinations',
      stars: '3.2k',
      contributions: 'Active Contributor',
      logo: '🌸'
    },
    {
      project: 'TourPin',
      org: 'Marcusqw',
      contributions: 'Major PR (3,197 lines)',
      logo: '📍'
    }
  ]

  return (
    <section id="achievements" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        🏆 Achievements & Open Source
      </h2>

      {/* GitHub Achievements */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span>🎖️</span> GitHub Achievements
        </h3>
        <div className="flex flex-wrap gap-4">
          {achievements[0].badges.map((badge) => (
            <div
              key={badge.name}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg"
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="font-medium">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hacktoberfest */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span>🌟</span> Hacktoberfest Journey
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {hacktoberfest.map((event, index) => (
            <div
              key={index}
              className={`text-center p-4 rounded-lg ${
                event.special 
                  ? 'bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-500'
                  : 'bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30'
              }`}
            >
              <div className="text-3xl mb-2">{event.special ? '🌳' : '🎃'}</div>
              <div className="font-bold">{event.year}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{event.level}</div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border-l-4 border-green-500">
          <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
            <span>🌳</span> Tree Planted - Certificate #8289977
          </h4>
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Species:</strong> Calocedrus decurrens (Incense Cedar)</p>
            <p><strong>Location:</strong> Lost Forests Recovery, California, US</p>
            <p><strong>CO2 Offset:</strong> 50 Kg (Lifetime) | 5 Kg/year</p>
            <p><strong>Tree Birthday:</strong> October 24, 2025</p>
            <p className="text-xs italic pt-2">Planted as a gift from Hacktoberfest for completing the sixth 2025 contribution. This tree helps restore forests lost to recent California wildfires.</p>
            <Link 
              href="/certificates/hacktoberfest-tree-certificate.pdf" 
              target="_blank"
              className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 hover:underline text-sm mt-2"
            >
              📄 View Certificate
            </Link>
          </div>
        </div>
      </div>

      {/* Open Source Contributions */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span>💻</span> Open Source Contributions
        </h3>
        <div className="space-y-4">
          {openSource.map((project) => (
            <div
              key={project.project}
              className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.logo}</span>
                  <div>
                    <h4 className="font-bold text-lg">{project.project}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      @{project.org}
                    </p>
                  </div>
                </div>
                {project.stars && (
                  <div className="flex items-center gap-1 text-yellow-600">
                    <span>⭐</span>
                    <span className="font-semibold">{project.stars}</span>
                  </div>
                )}
              </div>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {project.contributions}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Holopin Badges */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span>🎖️</span> Holopin Badge Collection
        </h3>
        <div className="mb-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
            {holopinBadges.map((badge, index) => (
              <div
                key={index}
                className="p-3 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-700"
              >
                <div className="text-2xl mb-2">🏅</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {badge.name}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {badge.org}
                </div>
                <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                  {badge.type}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link
            href="https://holopin.io/@shri33"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg hover:shadow-lg transition-shadow border-2 border-purple-200 dark:border-purple-700">
              <p className="text-lg font-medium mb-2">🏆 View Full Badge Collection on Holopin</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                15+ unique badges from Hacktoberfest, ILLA Cloud, Appwrite, DigitalOcean & more
              </p>
              <div className="mt-4 flex justify-center gap-2 text-3xl">
                🎯 🚀 ⭐ 💎 🌟
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Contribution Stats */}
      <div className="mt-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">364 Contributions in the Last Year</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div>
            <div className="text-3xl font-bold text-primary">93%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Commits</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">6%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Pull Requests</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600">1%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Code Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">10K+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Lines Changed</div>
          </div>
        </div>
      </div>
    </section>
  )
}
