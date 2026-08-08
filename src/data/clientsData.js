import { assetPath } from '../utils/assetPath';

export const clientsData = Array.from({ length: 18 }, (_, index) => ({
  id: index + 1,
  name: `Corporate Client ${index + 1}`,
  logo: assetPath(`/images/clients/client-${index + 1}.png`)
}));
