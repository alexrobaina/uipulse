export const progressImplementation = `import Progress from "@/app/ui/atoms/Progress";

export default function ProgressExample() {
  return (
    <div className="space-y-6">
      {/* Basic Progress */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Basic Progress</h3>
        <Progress value={75} />
      </div>

      {/* With Percentage Outside */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Percentage</h3>
        <Progress value={60} showPercentage />
      </div>

      {/* With Percentage Inside */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Percentage Inside</h3>
        <Progress 
          value={45} 
          showPercentage 
          percentagePosition="inside" 
        />
      </div>

      {/* With Custom Label */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Custom Label</h3>
        <Progress 
          value={80} 
          label="4 of 5 tasks completed" 
          percentagePosition="outside" 
        />
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Sizes</h3>
        <Progress value={30} size="sm" showPercentage />
        <Progress value={50} size="md" showPercentage />
        <Progress value={70} size="lg" showPercentage />
        <Progress value={90} size="xl" showPercentage />
      </div>

      {/* Different Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Variants</h3>
        <Progress value={25} variant="default" showPercentage />
        <Progress value={45} variant="success" showPercentage />
        <Progress value={65} variant="warning" showPercentage />
        <Progress value={85} variant="error" showPercentage />
      </div>

      {/* Dynamic Progress Example */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Dynamic Progress</h3>
        <Progress 
          value={Math.random() * 100} 
          showPercentage 
          animated={true}
        />
      </div>
    </div>
  );
}`;
