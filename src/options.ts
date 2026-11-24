import type { UserInput } from "./types";

export type Option = { value: string; label: string };

export const FIELDS: { key: keyof UserInput; label: string; options: Option[] }[] = [
  { key: "faceShape", label: "臉型", options: [
    { value: "round", label: "圓臉" }, { value: "square", label: "方形臉" },
    { value: "long", label: "長臉" }, { value: "oval", label: "鵝蛋臉" },
    { value: "heart", label: "心形臉" }, { value: "diamond", label: "菱形臉" },
    { value: "hexagonal", label: "六角形臉" }, { value: "squareround", label: "方圓臉" },
  ]},
  { key: "eyeShape", label: "眼型", options: [
    { value: "almond", label: "杏仁眼" }, { value: "round_eye", label: "圓眼" },
    { value: "phoenix", label: "丹鳳眼" }, { value: "peach", label: "桃花眼" },
    { value: "fox", label: "狐狸眼" }, { value: "dog", label: "狗狗眼" },
    { value: "narrow", label: "細長眼" },
  ]},
  { key: "eyelidType", label: "眼皮", options: [
    { value: "double", label: "雙眼皮" }, { value: "single", label: "單眼皮" },
    { value: "hooded", label: "內雙" },
  ]},
  { key: "noseShape", label: "鼻型", options: [
    "小巧鼻", "蒜頭鼻", "水滴鼻", "直挺鼻", "寬鼻型",
    "精緻尖鼻", "肉感鼻", "小翹鼻", "鷹鉤鼻", "扁鼻",
  ].map((n) => ({ value: n, label: n })) },
  { key: "lipShape", label: "唇形", options: [
    { value: "thin", label: "薄唇" }, { value: "thick", label: "厚唇" },
    { value: "smile", label: "微笑唇" }, { value: "m_shape", label: "M 字唇" },
    { value: "natural_lip", label: "自然唇形" },
  ]},
  { key: "skinTone", label: "膚色", options: [
    { value: "白皙", label: "白皙膚色" }, { value: "自然", label: "自然膚色" },
    { value: "小麥", label: "小麥膚色" },
  ]},
  { key: "hairLength", label: "目前髮長", options: [
    { value: "short", label: "短髮" }, { value: "medium", label: "中長髮" },
    { value: "long", label: "長髮" },
  ]},
  { key: "style", label: "想要的風格", options: [
    "自然清新", "韓系溫柔", "甜美可愛", "清冷個性", "成熟優雅", "純慾撩人",
    "歐美辣妹", "復古港風", "日系透明感", "富家千金", "中性少年感",
  ].map((s) => ({ value: s, label: s })) },
  { key: "occasion", label: "場合", options: [
    { value: "daily", label: "日常通勤" }, { value: "date", label: "浪漫約會" },
    { value: "interview", label: "面試職場" }, { value: "travel", label: "旅遊打卡" },
    { value: "concert", label: "音樂祭/派對" }, { value: "night_out", label: "酒吧夜店" },
    { value: "wedding_guest", label: "婚禮宴會" }, { value: "photoshoot", label: "專業棚拍" },
  ]},
];