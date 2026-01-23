
import mesh from './rashi/mesh.webp';
import vrish from './rashi/vrish.webp';
import mithun from './rashi/mithun.webp';
import karkat from './rashi/karkat.webp';
import simha from './rashi/simha.webp';
import kanya from './rashi/kanya.webp';
import tula from './rashi/tula.webp';
import vrishchik from './rashi/vrishchik.webp';
import dhanu from './rashi/dhanu.webp';
import makar from './rashi/makar.webp';
import kumbha from './rashi/kumbha.webp';
import meen from './rashi/meen.webp';

const RashiImages = {
  mesh,
  vrish,
  mithun,
  karkat,
  simha,
  kanya,
  tula,
  vrishchik,
  dhanu,
  makar,
  kumbha,
  meen
};

export const RASHI_IMAGES: Record<string, string> = {
  'mesh.png': RashiImages.mesh,
  'vrish.png': RashiImages.vrish,
  'mithun.png': RashiImages.mithun,
  'karkat.png': RashiImages.karkat,
  'simha.png': RashiImages.simha,
  'kanya.png': RashiImages.kanya,
  'tula.png': RashiImages.tula,
  'vrishchik.png': RashiImages.vrishchik,
  'dhanu.png': RashiImages.dhanu,
  'makar.png': RashiImages.makar,
  'kumbha.png': RashiImages.kumbha,
  'meen.png': RashiImages.meen
};
export default RashiImages;
