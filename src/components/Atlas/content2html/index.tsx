interface Content2HTMLProps {
  content: string;
}

export default function Content2HTML({ content }: Content2HTMLProps) {
  console.log({ content });

  return <> {content} </>;
}
