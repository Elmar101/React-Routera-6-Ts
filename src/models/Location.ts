import { Location as ReactLocation } from "react-router-dom";

export type LocationState = { url: string };
export interface Location<State> extends Omit<ReactLocation, "state"> { state: State }
