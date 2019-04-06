export default function() {
  return [
    {
      title: "Dashboard",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">home</i>',
      htmlAfter: ""
    },
    {
      title: "Playlists",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/playlists",
    },
    {
      title: "Users",
      htmlBefore: '<i class="material-icons">group</i>',
      to: "/users",
    },
    {
      title: "Images",
      htmlBefore: '<i class="material-icons">burst_mode</i>',
      to: "/images",
    },
    {
      title: "Settings",
      htmlBefore: '<i class="material-icons">settings</i>',
      to: "/settings",
    },
    {
      title: "Tables chart --",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "errors -- ",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
