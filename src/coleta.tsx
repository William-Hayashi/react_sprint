import React, { useState, useEffect } from 'react';

interface ClickData {
    timestamp: string;
    xPosition: number;
    yPosition: number;
}


const ClickTracker = () => {
    const [data, setData] = useState<ClickData[]>([]);

    useEffect(() => {
        const trackClickAndPosition = (event: MouseEvent) => {
            const clickData: ClickData = {
                timestamp: new Date().toISOString(),
                xPosition: event.pageX,
                yPosition: event.pageY
            };

            setData(prevData => [...prevData, clickData]);
        };

        document.addEventListener('click', trackClickAndPosition);

        return () => {
            document.removeEventListener('click', trackClickAndPosition);
        };
    }, []);

    const saveDataToCSV = () => {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Timestamp,X Position,Y Position\n";

        data.forEach((click: ClickData) => {
            csvContent += `${click.timestamp},${click.xPosition},${click.yPosition}\n`;
        });

        const fileName = document.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + "_click_data.csv";
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", fileName);
        document.body.appendChild(link);

        link.click();
    };

    return (
        <div>
            <button onClick={saveDataToCSV}>Salvar em CSV</button>
        </div>
    );
};

export default ClickTracker;
