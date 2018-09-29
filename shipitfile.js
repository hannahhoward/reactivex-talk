module.exports = function (shipit) {
  require("shipit-deploy")(shipit);

  shipit.initConfig({
    default: {
      workspace: "/tmp/shipit",
      deployTo: "/var/www/reactivex-talk.techgirlwonder.com",
      repositoryUrl: "git@github.com:hannahhoward/reactivex-talk.git",
      ignores: [".git", "node_modules"],
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true
    },
    production: {
      servers: "hannah@159.65.63.108"
    }
  });

  shipit.blTask("build", () => {
    return shipit.local("npm install", { cwd: "/tmp/shipit" }).then(() => {
      return shipit.local("npm run build", { cwd: "/tmp/shipit" });
    });
  });
  shipit.on("fetched", () => {
    shipit.start("build");
  });
};
