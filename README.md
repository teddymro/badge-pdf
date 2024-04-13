# Badge Generator

This Node.js script generates a PDF badge for event participants. 
The badge includes customizable fields for the participant's name, company, and position, and features a small logo space at the top. 
The output PDF is formatted to fit one quarter of an A4 page.

## Features

- Generates a quarter-page badge in PDF format.
- Includes customizable text for the participant's name, company, and position.
- Provides space for a logo at the top of the badge.
- Outputs files with unique names based on the participant's name and a generated hash.

## Prerequisites

Before running this script, ensure that you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

Clone the repository or download the files to your local machine. Navigate to the project directory and run the following command to install the required dependencies:

```bash
npm install
node generateBadge.js "<Name>" "<Company>" "<Position>"
