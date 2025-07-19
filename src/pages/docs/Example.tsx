import {
    DocPage,
    DocHeading,
    DocParagraph,
    DocCodeBlock,
    DocQuote,
    DocTable, DocSubheading, DocInlineCode,
} from "../../components/docs";


const Example = () => {


    return (
        <DocPage title="Installation" description="How to get started with MyLib.">
            <DocHeading>Install via NPM</DocHeading>
            <DocCodeBlock>npm install my-library</DocCodeBlock>

            <DocHeading>Install via NPM</DocHeading>
            <DocCodeBlock>npm install my-library</DocCodeBlock>

            <DocHeading>Install via NPM</DocHeading>
            <DocCodeBlock>npm install my-library</DocCodeBlock>

            <DocHeading>Install via NPM</DocHeading>
            <DocCodeBlock>npm install my-library</DocCodeBlock>

            <DocHeading>Install via NPM</DocHeading>
            <DocCodeBlock>npm install my-library</DocCodeBlock>

            <DocHeading>Install via NPM</DocHeading>
            <DocCodeBlock>npm install my-library</DocCodeBlock>

            <DocHeading>Install via NPM</DocHeading>
            <DocCodeBlock>npm install my-library</DocCodeBlock>

            <DocHeading>Install via NPM</DocHeading>
            <DocCodeBlock>npm install my-library</DocCodeBlock>

            <DocHeading>Install via NPM</DocHeading>
            <DocCodeBlock>npm install my-library</DocCodeBlock>

            <DocSubheading>Usage</DocSubheading>
            <DocParagraph>
                Import like so: <DocInlineCode>import &#123; MyComponent &#125; from "my-library"</DocInlineCode>
            </DocParagraph>

            <DocQuote>Make sure you’re using Node 18+</DocQuote>

            <DocTable>
                <thead>
                <tr>
                    <th>Command</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><DocInlineCode>build</DocInlineCode></td>
                    <td>Builds the project</td>
                </tr>
                </tbody>
            </DocTable>
        </DocPage>
    );

};

export default Example;