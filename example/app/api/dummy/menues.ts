export default () => [
  {
    key: 1,
    title: "판매평가",
    subMenues: [
      { key: 1, title: "보고서", url: "/sale/report" },
      { key: 2, title: "평가제외", url: "/sale/except" },
    ],
  },
  {
    key: 2,
    title: "서비스평가",
    subMenues: [
      { key: 1, title: "보고서", url: "/service/report" },
      { key: 2, title: "평가제외", url: "/service/except" },
    ],
  },
];
