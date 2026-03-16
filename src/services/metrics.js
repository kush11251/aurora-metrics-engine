const metricsData = [
    { id: 1, name: 'Metric 1', value: 10 },
    { id: 2, name: 'Metric 2', value: 20 },
    { id: 3, name: 'Metric 3', value: 30 }
];

const getMetrics = (callback) => {
    // Simulate a delay
    setTimeout(() => {
        callback(null, metricsData);
    }, 1000);
};

module.exports = { getMetrics };