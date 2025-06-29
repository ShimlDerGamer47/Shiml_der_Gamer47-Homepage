document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const twitchEmbedContainer = document.getElementById(
    "twitch-embed-container"
  );
  const currentDomain = window.location.hostname;

  const observer = new IntersectionObserver((entries, obs) => {
    if (!entries[0].isIntersecting) return;

    const script = document.createElement("script");
    script.src = "https://embed.twitch.tv/embed/v1.js";
    script.onload = () => {
      const embed = new Twitch.Embed("twitch-embed", {
        width: 1920,
        height: 1080,
        channel: "shiml_der_gamer47",
        theme: "dark",
        autoplay: true,
        allowfullscreen: true,
        layout: "livestream",
        parent: [currentDomain]
      });

      embed.addEventListener(Twitch.Embed.LIVESTREAM_READY, () => {
        const player = embed.getPlayer();
        player.setVolume(0.3);
        player.setMuted(true);
        player.setQuality("chunked");
      });
    };

    body.appendChild(script);
    obs.unobserve(twitchEmbedContainer);
  });

  observer.observe(twitchEmbedContainer);

  const followButtonContainer = document.getElementById(
    "follow-button-container"
  );
  if (followButtonContainer && typeof followButton !== "undefined") {
    followButtonContainer.appendChild(followButton);
  }
});
