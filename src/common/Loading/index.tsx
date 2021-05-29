import { CircularProgress } from "@material-ui/core";

export default function Loading() {
  return (
    <div className="flex_col">
      <CircularProgress size={50} />
    </div>
  );
}
