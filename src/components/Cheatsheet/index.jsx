import React, { useState, useCallback } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Accordion from '@radix-ui/react-accordion';
import {
  MagnifyingGlassIcon,
  CopyIcon,
  CheckIcon,
  ChevronDownIcon,
} from '@radix-ui/react-icons';
import { data } from './data';
import styles from './cheatsheet.module.css';

function CommandRow({ cmd, desc }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(cmd);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [cmd]);

  return (
    <div className={styles.row}>
      <code className={styles.cmd} title={cmd}>{cmd}</code>
      <span className={styles.desc}>{desc}</span>
      <button
        className={`${styles.copyBtn} ${copied ? styles.copyBtnDone : ''}`}
        onClick={handleCopy}
        title={copied ? 'Copiado!' : 'Copiar'}
      >
        {copied ? <CheckIcon width={14} height={14} /> : <CopyIcon width={14} height={14} />}
      </button>
    </div>
  );
}

function SectionAccordion({ section }) {
  return (
    <Accordion.Item value={section.title} className={styles.accordionItem}>
      <Accordion.Header asChild>
        <Accordion.Trigger className={styles.accordionTrigger}>
          <ChevronDownIcon className={styles.chevron} />
          <span>{section.title}</span>
          <span className={styles.badge}>{section.commands.length}</span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className={styles.accordionContent}>
        <div className={styles.commandList}>
          {section.commands.map((item) => (
            <CommandRow key={item.cmd} cmd={item.cmd} desc={item.desc} />
          ))}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default function CheatsheetUI() {
  const [search, setSearch] = useState('');

  const term = search.trim().toLowerCase();

  const searchResults = term
    ? data.flatMap((tab) =>
        tab.sections.flatMap((section) =>
          section.commands
            .filter(
              (c) =>
                c.cmd.toLowerCase().includes(term) ||
                c.desc.toLowerCase().includes(term)
            )
            .map((c) => ({ ...c, _tab: tab.label, _section: section.title }))
        )
      )
    : null;

  return (
    <div className={styles.wrapper}>
      {/* Search */}
      <div className={styles.searchBar}>
        <MagnifyingGlassIcon className={styles.searchIcon} />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar comando ou descrição..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button className={styles.clearBtn} onClick={() => setSearch('')}>
            ✕
          </button>
        )}
      </div>

      {/* Search results */}
      {searchResults ? (
        <div>
          <p className={styles.resultCount}>
            {searchResults.length} resultado{searchResults.length !== 1 ? 's' : ''} para &ldquo;{search}&rdquo;
          </p>
          <div className={styles.accordionItem}>
            <div className={styles.commandList}>
              {searchResults.length === 0 ? (
                <div style={{ padding: '20px 16px', color: 'var(--ifm-color-emphasis-500)', fontSize: '0.9rem' }}>
                  Nenhum comando encontrado.
                </div>
              ) : (
                searchResults.map((item, i) => (
                  <div key={i}>
                    <span className={styles.resultMeta}>
                      {item._tab} &rsaquo; {item._section}
                    </span>
                    <CommandRow cmd={item.cmd} desc={item.desc} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Tabs + Accordion */
        <Tabs.Root defaultValue={data[0].id}>
          <Tabs.List className={styles.tabsList}>
            {data.map((tab) => (
              <Tabs.Trigger key={tab.id} value={tab.id} className={styles.tabsTrigger}>
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {data.map((tab) => (
            <Tabs.Content key={tab.id} value={tab.id} className={styles.tabsContent}>
              <Accordion.Root
                type="multiple"
                defaultValue={tab.sections.slice(0, 1).map((s) => s.title)}
                className={styles.accordionRoot}
              >
                {tab.sections.map((section) => (
                  <SectionAccordion key={section.title} section={section} />
                ))}
              </Accordion.Root>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      )}
    </div>
  );
}
