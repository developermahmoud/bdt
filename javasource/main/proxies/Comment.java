// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package main.proxies;

public class Comment extends system.proxies.FileDocument
{
	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "Main.Comment";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Comment("Comment"),
		FileID("FileID"),
		Name("Name"),
		DeleteAfterDownload("DeleteAfterDownload"),
		Contents("Contents"),
		HasContents("HasContents"),
		Size("Size"),
		Comment_Lead("Main.Comment_Lead");

		private final java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public Comment(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected Comment(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject commentMendixObject)
	{
		super(context, commentMendixObject);
		if (!com.mendix.core.Core.isSubClassOf(entityName, commentMendixObject.getType())) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	
	}

	/**
	 * @deprecated Use 'Comment.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static main.proxies.Comment initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return main.proxies.Comment.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static main.proxies.Comment initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new main.proxies.Comment(context, mendixObject);
	}

	public static main.proxies.Comment load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return main.proxies.Comment.initialize(context, mendixObject);
	}

	public static java.util.List<main.proxies.Comment> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		return com.mendix.core.Core.createXPathQuery(String.format("//%1$s%2$s", entityName, xpathConstraint))
			.execute(context)
			.stream()
			.map(obj -> main.proxies.Comment.initialize(context, obj))
			.collect(java.util.stream.Collectors.toList());
	}

	/**
	 * @return value of Comment
	 */
	public final java.lang.String getComment()
	{
		return getComment(getContext());
	}

	/**
	 * @param context
	 * @return value of Comment
	 */
	public final java.lang.String getComment(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Comment.toString());
	}

	/**
	 * Set value of Comment
	 * @param comment
	 */
	public final void setComment(java.lang.String comment)
	{
		setComment(getContext(), comment);
	}

	/**
	 * Set value of Comment
	 * @param context
	 * @param comment
	 */
	public final void setComment(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String comment)
	{
		getMendixObject().setValue(context, MemberNames.Comment.toString(), comment);
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of Comment_Lead
	 */
	public final main.proxies.Lead getComment_Lead() throws com.mendix.core.CoreException
	{
		return getComment_Lead(getContext());
	}

	/**
	 * @param context
	 * @return value of Comment_Lead
	 * @throws com.mendix.core.CoreException
	 */
	public final main.proxies.Lead getComment_Lead(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		main.proxies.Lead result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.Comment_Lead.toString());
		if (identifier != null) {
			result = main.proxies.Lead.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of Comment_Lead
	 * @param comment_lead
	 */
	public final void setComment_Lead(main.proxies.Lead comment_lead)
	{
		setComment_Lead(getContext(), comment_lead);
	}

	/**
	 * Set value of Comment_Lead
	 * @param context
	 * @param comment_lead
	 */
	public final void setComment_Lead(com.mendix.systemwideinterfaces.core.IContext context, main.proxies.Lead comment_lead)
	{
		if (comment_lead == null) {
			getMendixObject().setValue(context, MemberNames.Comment_Lead.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.Comment_Lead.toString(), comment_lead.getMendixObject().getId());
		}
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this) {
			return true;
		}
		if (obj != null && getClass().equals(obj.getClass()))
		{
			final main.proxies.Comment that = (main.proxies.Comment) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

	/**
	 * @return String name of this class
	 */
	public static java.lang.String getType()
	{
		return entityName;
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@java.lang.Override
	@java.lang.Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}
