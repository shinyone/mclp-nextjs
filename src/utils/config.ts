export const config = {
  server: {
    name: "ExampleServer",
    nameShort: "MCES",
    ip: "Example.com",
    port: 25565,
    type: "Java Edition",
    description: "Minecraft Survival Server",
    version: "1.21.4",
  },
  season: {
    version: "0.0.1",
    zero: "Founders Era",
    one: "The Reset",
    two: "Amplified",
    three: "Blossom Boom",
    four: "Final Chapter",
  },
  environment: {
    javaVersion: "23.0.2",
  },
  discord: {
    link: "discord.gg/floris",
    owner1: "@mrfloris",
    owner2: "@admins",
  },
  map: {
    link: "Example.com:8100",
  },
  voting: {
    rewards: "a diamond",
    sites: [
      { url: "https://www.example.com/vote/server/1", short: "VS1" },
      { url: "https://www.example.com/vote/server/2", short: "VS2" },
      { url: "https://www.example.com/vote/server/3", short: "VS3" },
      { url: "https://www.example.com/vote/server/4", short: "VS4" },
    ],
  },
  website: {
    version: "0.4.0",
  },
};