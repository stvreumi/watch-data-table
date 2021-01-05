// leafValues is an array
function sameDate(value) {
  console.log("enter function");
  const dateString = value.toString();
  const date = dateString.slice(0, 8);

  console.log(value);
  return date;
}

const columnInfo = [
  {
    Header: "Data",
    columns: [
      {
        Header: "Date",
        accessor: "detectTimeHour",
        //aggregateValue: sameDate
      },
      {
        Header: "Notification",
        accessor: row => !!row.Notification ? row.Notification.length : '(0)',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (total)`,
        disableGroupBy: true,
      },
      {
        Header: "Sensor",
        accessor: row => !!row.Sensor ? row.Sensor.length : '(0)',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (total)`,
        disableGroupBy: true,
      },
      {
        Header: "Telephony",
        accessor: row => !!row.Telephony ? row.Telephony.length : '(0)',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (total)`,
        disableGroupBy: true,
      },
      {
        Header: "AppUsage",
        accessor: row => !!row.AppUsage ? row.AppUsage.length : '(0)',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (total)`,
        disableGroupBy: true,
      },
      {
        Header: "Battery",
        accessor: row => !!row.Battery ? row.Battery.length : '(0)',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (total)`,
        disableGroupBy: true,
      },
      {
        Header: "Connectivity",
        accessor: row => !!row.Connectivity ? row.Connectivity.length : '(0)',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (total)`,
        disableGroupBy: true,
      },
      {
        Header: "ActivityRecognition",
        accessor: row => !!row.ActivityRecognition ? row.ActivityRecognition.length : '(0)',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (total)`,
        disableGroupBy: true,
      },
      {
        Header: "TransportationMode",
        accessor: row => !!row.TransportationMode ? row.TransportationMode.length : '(0)',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (total)`,
        disableGroupBy: true,
      },
      {
        Header: "myAccessibility",
        accessor: row => !!row.myAccessibility ? row.myAccessibility.length : '(0)',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (total)`,
        disableGroupBy: true,
      },
      {
        Header: "AppTimes",
        accessor: row => !!row.AppTimes ? row.AppTimes.length : '(0)',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (total)`,
        disableGroupBy: true,
      },
      {
        Header: "QuestionaireAns",
        accessor: row => !!row.QuestionaireAns ? row.QuestionaireAns.length : '(0)',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (total)`,
        disableGroupBy: true,
      },
    ],
  },

];

export default columnInfo;
