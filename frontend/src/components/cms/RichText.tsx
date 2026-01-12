import React from 'react';

interface LexicalNode {
    type: string;
    version?: number;
    children?: LexicalNode[];
    text?: string;
    format?: number;
    tag?: string;
    className?: string;
    style?: string;
    [key: string]: any;
}

interface RichTextProps {
    content: {
        root: LexicalNode;
    } | any;
    className?: string;
}

const IS_BOLD = 1;
const IS_ITALIC = 2;
const IS_STRIKETHROUGH = 4;
const IS_UNDERLINE = 8;
const IS_CODE = 16;

const RichText: React.FC<RichTextProps> = ({ content, className }) => {
    if (!content || !content.root) return null;

    const renderNode = (node: LexicalNode, index: number): React.ReactNode => {
        if (!node) return null;

        if (node.type === 'text') {
            let textContent: React.ReactNode = node.text;
            const format = node.format || 0;

            if (format & IS_BOLD) textContent = <strong key={`bold-${index}`}>{textContent}</strong>;
            if (format & IS_ITALIC) textContent = <em key={`italic-${index}`}>{textContent}</em>;
            if (format & IS_UNDERLINE) textContent = <u key={`underline-${index}`}>{textContent}</u>;
            if (format & IS_STRIKETHROUGH) textContent = <s key={`strike-${index}`}>{textContent}</s>;
            if (format & IS_CODE) textContent = <code key={`code-${index}`}>{textContent}</code>;

            return textContent;
        }

        const children = node.children?.map((child, i) => renderNode(child, i));

        switch (node.type) {
            case 'root':
                return <div key={index} className={className}>{children}</div>;
            case 'paragraph':
                return <p key={index} className="mb-4 last:mb-0">{children}</p>;
            case 'heading':
                const Tag = node.tag as keyof JSX.IntrinsicElements || 'h2';
                return <Tag key={index} className="font-bold my-4">{children}</Tag>;
            case 'list':
                const ListTag = node.tag === 'ol' ? 'ol' : 'ul';
                return (
                    <ListTag key={index} className="list-disc list-inside mb-4 ml-4">
                        {children}
                    </ListTag>
                );
            case 'listitem':
                return <li key={index} className="mb-1">{children}</li>;
            case 'quote':
                return (
                    <blockquote key={index} className="border-l-4 border-primary pl-4 italic my-4">
                        {children}
                    </blockquote>
                );
            case 'link':
                return (
                    <a
                        key={index}
                        href={node.fields?.url || '#'}
                        target={node.fields?.newTab ? '_blank' : undefined}
                        rel={node.fields?.newTab ? 'noopener noreferrer' : undefined}
                        className="text-primary underline"
                    >
                        {children}
                    </a>
                );
            default:
                return <div key={index}>{children}</div>;
        }
    };

    return <>{renderNode(content.root, 0)}</>;
};

export default RichText;
