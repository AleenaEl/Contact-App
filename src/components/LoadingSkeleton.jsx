import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export function LoadingSkeleton() {
  return (
    <Card className="overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm">

      {/* <div className="h-20 bg-gradient-to-r from-gray-200 to-gray-300 relative">
        <div className="absolute -bottom-10 left-6">
          <Skeleton className="w-20 h-20 rounded-full border-4 border-gray-100" />
        </div>
      </div> */}

      <CardContent className="pt-12 p-6">
        <div className="space-y-4">

          <div>
            <Skeleton className="h-6 w-32 mb-2  rounded-md bg-gray-300" />
            <Skeleton className="h-5 w-20" />
          </div>

         
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3  ">
                {/* <Skeleton className="w-4 h-4 rounded " /> */}
                <Skeleton className="h-5 w-full max-w-[200px]  rounded-md bg-gray-300" />
              </div>
            ))}
          </div>

          
          <div className="flex gap-2 pt-2">
            <Skeleton className="h-6 flex-1  rounded-md bg-gray-300 " />
            <Skeleton className="h-6 flex-1  rounded-md bg-gray-300" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <LoadingSkeleton key={i} />
      ))}
    </div>
  );
}
