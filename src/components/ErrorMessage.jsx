import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";

export function ErrorMessage({ message, onRetry }) {
  return (
    <div className="max-w-md mx-auto">
      <Alert className="border-red-200 bg-red-50">
        <AlertTriangle className="h-4 w-4 text-red-500" />
        <AlertTitle className="text-red-800">Something went wrong</AlertTitle>
        <AlertDescription className="text-red-700 mb-3">
          {message}
        </AlertDescription>
        <Button
          onClick={onRetry}
          size="sm"
          className="bg-red-500 hover:bg-red-600"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      </Alert>
    </div>
  );
}
