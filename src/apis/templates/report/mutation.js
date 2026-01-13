export const CREATE_TEMPLATE_MUTATION = `
  mutation Mutation($reportName: String!, $companyId: String!, $tables: [TableInput]) {
  createTemplate(reportName: $reportName, companyId: $companyId, tables: $tables) {
    success
    status
    message
    data
  }
}
`;
