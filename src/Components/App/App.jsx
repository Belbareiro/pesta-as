import Tabs from '../TabsComponent/Tabs'

const App = () => {
    const tabs = [
        {
            label: 'Tab 1',
            content: 'Content of Tab 1',
            onClick: () => console.log('Tab 1 clicked'),
        },
        {
            label: 'Tab 2',
            content: 'Tab 2 content is showing here',
        },
        {
            label: 'Tab 3',
            content: 'Content of Tab 3',
            onClick: () => console.log('Tab 3 clicked'),
        },
    ];

    return (
        <div>
            <Tabs tabs={tabs} />
        </div>
    );
};

export default App;
