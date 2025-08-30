import Progress from "@/app/ui/atoms/Progress";
import Preview from "@/app/components/Preview";

export default function ProgressDemo() {
  return (
    <Preview>
      <div className="space-y-8 w-full">
        {/* Basic Usage */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Basic Usage</h3>
          <div className="space-y-3">
            <Progress value={25} />
            <Progress value={50} />
            <Progress value={75} />
            <Progress value={100} />
          </div>
        </div>

        {/* With Percentage Outside */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">With Percentage (Outside)</h3>
          <div className="space-y-3">
            <Progress value={35} showPercentage />
            <Progress value={68} showPercentage />
            <Progress value={92} showPercentage />
          </div>
        </div>

        {/* With Percentage Inside */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">With Percentage (Inside)</h3>
          <div className="space-y-3">
            <Progress value={15} showPercentage percentagePosition="inside" size="lg" />
            <Progress value={45} showPercentage percentagePosition="inside" size="lg" />
            <Progress value={78} showPercentage percentagePosition="inside" size="lg" />
          </div>
        </div>

        {/* Custom Labels */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Custom Labels</h3>
          <div className="space-y-3">
            <Progress value={40} label="2 of 5 tasks completed" />
            <Progress value={60} label="Downloading..." />
            <Progress value={85} label="Almost done!" />
          </div>
        </div>

        {/* Different Sizes */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Sizes</h3>
          <div className="space-y-3">
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Small</span>
              <Progress value={30} size="sm" showPercentage />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Medium (Default)</span>
              <Progress value={50} size="md" showPercentage />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Large</span>
              <Progress value={70} size="lg" showPercentage />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Extra Large</span>
              <Progress value={90} size="xl" showPercentage />
            </div>
          </div>
        </div>

        {/* Variants */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Variants</h3>
          <div className="space-y-3">
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Default</span>
              <Progress value={25} variant="default" showPercentage />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Primary</span>
              <Progress value={45} variant="primary" showPercentage />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Success</span>
              <Progress value={65} variant="success" showPercentage />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Warning</span>
              <Progress value={80} variant="warning" showPercentage />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Error</span>
              <Progress value={95} variant="error" showPercentage />
            </div>
          </div>
        </div>

        {/* Edge Cases */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Edge Cases</h3>
          <div className="space-y-3">
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Empty (0%)</span>
              <Progress value={0} showPercentage />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Low percentage with inside text</span>
              <Progress value={8} showPercentage percentagePosition="inside" size="lg" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Complete (100%)</span>
              <Progress value={100} showPercentage variant="success" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Custom max value</span>
              <Progress value={150} max={200} showPercentage label="150/200 MB" />
            </div>
          </div>
        </div>
      </div>
    </Preview>
  );
}