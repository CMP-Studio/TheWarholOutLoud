
// *** Action Types ***
export const TOGGLE_FLOOR_EXPANDED = 'TOGGLE_FLOOR_EXPANDED';

// *** Action Creators ***
export function toggleFloorExpanded(index) {
  return {
    type: TOGGLE_FLOOR_EXPANDED,
    index,
  };
}
