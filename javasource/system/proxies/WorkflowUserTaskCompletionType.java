// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package system.proxies;

public enum WorkflowUserTaskCompletionType
{
	Single(new java.lang.String[][] { new java.lang.String[] { "en_US", "Single" } }),
	Veto(new java.lang.String[][] { new java.lang.String[] { "en_US", "Veto" } }),
	Consensus(new java.lang.String[][] { new java.lang.String[] { "en_US", "Consensus" } });

	private final java.util.Map<java.lang.String, java.lang.String> captions;

	private WorkflowUserTaskCompletionType(java.lang.String[][] captionStrings)
	{
		this.captions = new java.util.HashMap<>();
		for (java.lang.String[] captionString : captionStrings) {
			captions.put(captionString[0], captionString[1]);
		}
	}

	public java.lang.String getCaption(java.lang.String languageCode)
	{
		return captions.getOrDefault(languageCode, "en_US");
	}

	public java.lang.String getCaption()
	{
		return captions.get("en_US");
	}
}
