// 送給後端的問卷資料
export type UserInput = {
  faceShape: string;
  eyeShape: string;
  eyelidType: string;
  noseShape: string;
  lipShape: string;
  skinTone: string;
  hairLength: string;
  style: string;
  occasion: string;
};

// 後端回傳的資料
export type HairColor = { name: string; desc: string; hex: string };
export type MakeupStep = { title: string; desc: string };

export type Recommendation = {
  hair_colors: HairColor[];
  makeup_steps: MakeupStep[];
  summary: string;
};