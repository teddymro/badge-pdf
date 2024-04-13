const PDFDocument = require('pdfkit');
const fs = require('fs');
const crypto = require('crypto');

function generateBadge(name, company, position) {
    const doc = new PDFDocument({ size: 'A4', margin: 50 });

    // file name output
    const hash = crypto.randomBytes(4).toString('hex');
    const formattedName = name.replace(/\s+/g, '_');
    const outputFile = `${formattedName}_${hash}.pdf`;

    doc.pipe(fs.createWriteStream(outputFile));

    // badge delimitation
    const quarterWidth = doc.page.width / 2;
    const quarterHeight = doc.page.height / 2;

    // mark badge delimitation
    doc.rect(0, 0, quarterWidth, quarterHeight).stroke();

    doc.fontSize(10).text('LOGO HERE', 50, 20, { width: quarterWidth - 100, align: 'center' });
    doc.fontSize(10).text('Name:', 50, 70, { continued: true }).fontSize(24).text(name, 100, 70);
    doc.fontSize(10).text('Company:', 50, 120, { continued: true }).fontSize(18).text(company, 130, 120);
    doc.fontSize(10).text('Position:', 50, 170, { continued: true }).fontSize(16).text(position, 130, 170);

    doc.end();

    console.log(`Badge created successfully: ${outputFile}`);
}

const args = process.argv.slice(2);
if (args.length !== 3) {
    console.log('Usage: node generateBadge.js <Name> <Company> <Position>');
    process.exit(1);
}

generateBadge(args[0], args[1], args[2]);
