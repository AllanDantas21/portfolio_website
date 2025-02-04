import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Terminal = () => {
    const { t } = useTranslation('common');
    const initialHistory = [
        t('terminal.welcome', "Welcome to my terminal portfolio!"),
        t('terminal.question', "What is the answer to life, the universe, and everything?")
    ];
    const [history, setHistory] = useState(initialHistory);
    const terminalRef = useRef(null);
    const [input, setInput] = useState('');

    const commands = {
        help: () => t('terminal.help', "Available commands: help, about, skills, projects, clear"),
        about: () => t('terminal.about', "Hi! I'm Allan Dantas, a software developer."),
        skills: () => t('terminal.skills', "My skills include: JavaScript, React, Node.js, etc."),
        projects: () => t('terminal.projects', "Check out my projects at github.com/allandantas21"),
        clear: () => {
            setHistory([]);
            setTimeout(() => setHistory(initialHistory), 100);
            return '';
        },
    };

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        if (trimmedCmd === '42') {
            window.location.href = '/42';
            return '';
        }
        if (commands[trimmedCmd]) {
            return commands[trimmedCmd]();
        }
        return t('terminal.commandNotFound', { cmd }, `Command not found: ${cmd}. Type 'help' for available commands.`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) return;

        const newHistory = [...history, `> ${input}`, handleCommand(input)];
        setHistory(newHistory);
        setInput('');
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <div className="terminal">
            <div className="terminal-output" ref={terminalRef}>
                {history.map((line, i) => (
                    <div key={i} className={line.startsWith('>') ? 'command-line' : 'initial-command'}>{line}</div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="terminal-form">
                <span className="prompt">{'>'}</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    autoFocus
                    className="terminal-input"
                />
            </form>
            <style jsx>{`
                .terminal {
                    width: 600px;
                    height: 400px;
                    overflow: hidden;
                    border: 2px solid #333;
                    background-color: #1a1a1a;
                    padding: 20px;
                    border-radius: 5px;
                }
                .terminal-output {
                    height: calc(100% - 30px);
                    overflow-y: auto;
                }
                .command-line {
                    color: green;
                }
                .initial-command {
                    color: white;
                }
                .terminal-form {
                    display: flex;
                    align-items: center;
                }
                .prompt {
                    color: white;
                }
                .terminal-input {
                    background-color: transparent;
                    border: none;
                    color: white;
                    flex: 1;
                    margin-left: 8px;
                    outline: none;
                }
            `}</style>
        </div>
    );
};

export default Terminal;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        }
    };
}
