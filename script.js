document.addEventListener(
  "DOMContentLoaded",
  function twitchEmbedContainerTocken() {
    const body = document.body;
    const twitchEmbedContainer = document.getElementById(
      "twitch-embed-container"
    );

    twitchEmbedContainer.id = "twitch-embed-container";
    twitchEmbedContainer.className = "twitch-embed-class";
    const currentDomain = window.location.hostname;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const script = document.createElement("script");
        script.src = "https://embed.twitch.tv/embed/v1.js";
        script.onload = () => {
          new Twitch.Embed("twitch-embed", {
            width: 1920,
            height: 1080,
            channel: "shiml_der_gamer47",
            animation: "body-off-on 5s ease-in-out",
            transition: "body-off-on 5s ease-in-out",
            theme: "dark",
            autoplay: true,
            allowfullscreen: "true",
            layout: "livestream",
            parent: [currentDomain]
          });
        };
        body.appendChild(script);
        observer.unobserve(twitchEmbedContainer);
      }
      return;
    });
    observer.observe(twitchEmbedContainer);

    embed.addEventListener(Twitch.Embed.LIVESTREAM_READY, () => {
      var player = embed.getPlayer();
      player.setVolume(0.3);
      player.setMuted(true);
      player.setQuality("chunked");
      return;
    });

    const followButtonContainer = document.getElementById(
      "follow-button-container"
    );
    followButtonContainer.appendChild(followButton);

    observer.observe(twitchEmbedContainer);
    return;
  }
);
