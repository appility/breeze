import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/react';
import { classNames } from '../../utils/classNames';
import './Tabs.css';

type TabItem = {
  name: string;
  content?: React.ReactNode;
  onClick?: () => void;
};

interface TabsProps {
  tabs: TabItem[];
  selectedIndex?: number;
  onChange?: (index: number) => void;
  fullWidth?: boolean;
}

export function Tabs({ tabs, selectedIndex, onChange, fullWidth=false }: TabsProps) {
  return (
    <TabGroup selectedIndex={selectedIndex} onChange={onChange}>
      <div
        className={classNames({
          'border-b border-gray-200 overflow-x-auto scrollbar-hide': true,
          'w-screen relative -ml-[50vw] left-1/2': fullWidth,
        })}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TabList className="-mb-px flex space-x-8 whitespace-nowrap">
            {tabs.map((tab) => (
              <Tab
                onClick={tab.onClick}
                key={tab.name}
                className={({ selected }) =>
                  classNames(
                    'px-3 py-2 text-sm font-medium border-b-2 transition-colors focus:outline-none focus:ring-0',
                    selected ? 'tab-active' : 'tab-inactive'
                  )
                }
              >
              {tab.name}
            </Tab>
            ))}
          </TabList>
        </div>
      </div>
      <TabPanels className="mt-4">
        {tabs.map((tab) => (
          <TabPanel key={tab.name}>{tab.content && tab.content}</TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}

export default Tabs
