import { Navigate } from "react-router-dom";
import { pageRoutes, buildingLocationSlugs } from "@/data/locations";
import CoworkingTemplate from "./services/CoworkingTemplate";
import UniversalServiceTemplate from "./services/UniversalServiceTemplate";
import BuildingLocationTemplate from "./services/BuildingLocationTemplate";
import VirtualOfficeTemplate from "./services/VirtualOfficeTemplate";

interface Props { routePath: string; }

const LocationServicePage = ({ routePath }: Props) => {
  const route = pageRoutes.find((r) => r.path === routePath);
  if (!route) return <Navigate to="/404" replace />;

  // Building-specific hub pages get their own dedicated design.
  if (buildingLocationSlugs.includes(route.location)) {
    return <BuildingLocationTemplate routePath={routePath} />;
  }

  switch (route.service) {
    case "coworking-space":  return <CoworkingTemplate routePath={routePath} />;
    case "virtual-office":   return <VirtualOfficeTemplate routePath={routePath} />;
    default:                 return <UniversalServiceTemplate routePath={routePath} />;
  }
};

export default LocationServicePage;
