// Presentation links use current repository locations. Pinned source bytes stay unchanged.
export function canonicalRepositoryUrl(url) {
  return url.replace(
    /^(https?:\/\/(?:github\.com|raw\.githubusercontent\.com)\/)headless-company\/(content-model-master-format|cmmf-skills|cmmf-studio|cmmf-visual-editor|cmmf-docs-web|cmmf-to-mermaid-renderer)(?=\/|\.git(?:[?#]|$)|[?#]|$)/i,
    (_, host, repository) => `${host}cmmf-project/${repository.toLowerCase() === 'cmmf-visual-editor' ? 'cmmf-studio' : repository.toLowerCase()}`,
  );
}
