import { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

export const toggle = (
  state: WritableDraft<{
    isDark: boolean;
  }>,
  { payload }: PayloadAction<boolean>
) => {
  state.isDark = payload;
};
