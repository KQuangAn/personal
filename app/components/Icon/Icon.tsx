"use client";

import css3 from "../../../public/css3.svg";
import html5 from "../../../public/html-5.svg";
import ts from "../../../public/typescript.svg";
import tailwind from "../../../public/tailwindcss.svg";
import mongodb from "../../../public/mongodb.svg";
import nextjs from "../../../public/nextjs.svg";
import prisma from "../../../public/prisma.svg";
import angular from "../../../public/angular.svg";

const iconTypes = {
  html5: html5,
  css3: css3,
  ts: ts,
  tailwind: tailwind,
  mongodb: mongodb,
  nextjs: nextjs,
  prisma: prisma,
  angular: angular,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
