let

  # See https://nixos.wiki/wiki/FAQ/Pinning_Nixpkgs for more information on pinning
  pinnedPkgs = builtins.fetchTarball {
    # Descriptive name to make the store path easier to identify
    name = "nixos-unstable-2019-07-28";
    # Use latest unstable release URL from https://howoldis.herokuapp.com/
    url = https://releases.nixos.org/nixpkgs/nixpkgs-19.09pre186574.88d9f776091/nixexprs.tar.xz;
    # Hash obtained using `nix-prefetch-url --unpack <url>`
    sha256 = "0mqsnz50ywajcjnk3xjf5zyinwvkhv2p46w2ix1f5i79npigjf9m";
  };

in

  pinnedPkgs