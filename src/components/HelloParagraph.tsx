interface HelloParagraphProps {
    city: string;
}

function HelloParagraph (props: HelloParagraphProps) {
    return (
        <p>Hallo {props.city} am 23.11.2021.</p>
    );
}

export default HelloParagraph;
