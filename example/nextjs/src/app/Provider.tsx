"use client";
import { RecoilEnv, RecoilRoot } from "recoil";
import "./tailwind.css";
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const Provider = ({ children }: any) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Provider;
