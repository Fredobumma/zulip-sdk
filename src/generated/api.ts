// Generated from Zulip OpenAPI (spec/zulip.yaml) by scripts/generate.ts. Do not edit by hand.
/* eslint-disable */

/**
 * An array of any parameters sent in the request that are not
 * supported by the endpoint.
 */
export type IgnoredParametersUnsupported = string[];

/** The ID of the event. Events appear in increasing order but may not be consecutive. */
export type EventIdSchema = number;

/**
 * The event's type, relevant both for client-side dispatch and server-side
 * filtering by event type in [POST /register](https://zulip.com/api/register-queue).
 */
export type EventTypeSchema = string;

export type Anchor = string;

/** Dictionary containing details of a file uploaded by a user. */
export interface Attachment {
	/** The unique ID for the attachment. */
	id: number;
	/** Name of the uploaded file. */
	name: string;
	/**
	 * A representation of the path of the file within the
	 * repository of user-uploaded files. If the `path_id` of a
	 * file is `{realm_id}/ab/cdef/temp_file.py`, its URL will be:
	 * `{server_url}/user_uploads/{realm_id}/ab/cdef/temp_file.py`.
	 */
	path_id: string;
	/** Size of the file in bytes. */
	size: number;
	/** Time when the attachment was uploaded as a UNIX timestamp. */
	create_time: number;
	/**
	 * Array containing the IDs of messages that reference this
	 * [uploaded file](https://zulip.com/api/upload-file). This includes messages
	 * sent by any user in the Zulip organization who sent a
	 * message containing a link to the uploaded file.
	 */
	message_ids: number[];
}

export type BasicChannel = BasicChannelBase & {
	stream_id: unknown;
	name: unknown;
	is_archived: unknown;
	description: unknown;
	date_created: unknown;
	creator_id: unknown;
	invite_only: unknown;
	rendered_description: unknown;
	is_web_public: unknown;
	stream_post_policy: unknown;
	message_retention_days: unknown;
	history_public_to_subscribers: unknown;
	topics_policy?: unknown;
	first_message_id: unknown;
	folder_id: unknown;
	is_recently_active: unknown;
	is_announcement_only: unknown;
	can_add_subscribers_group?: unknown;
	can_remove_subscribers_group: unknown;
	can_administer_channel_group?: unknown;
	can_delete_any_message_group?: unknown;
	can_delete_own_message_group?: unknown;
	can_move_messages_out_of_channel_group?: unknown;
	can_move_messages_within_channel_group?: unknown;
	can_send_message_group?: unknown;
	can_subscribe_group: unknown;
	can_resolve_topics_group?: unknown;
	can_create_topic_group?: unknown;
	subscriber_count: unknown;
	/**
	 * The average number of messages sent to the channel per week, as
	 * estimated based on recent weeks, rounded to the nearest integer.
	 *
	 * New in Zulip 8.0 (feature level 199).
	 */
	stream_weekly_traffic: number | null;
};

/** Object containing basic details about the channel. */
export interface BasicChannelBase {
	/** The unique ID of the channel. */
	stream_id: number;
	/** The name of the channel. */
	name: string;
	/**
	 * A boolean indicating whether the channel is [archived](https://zulip.com/help/archive-a-channel).
	 *
	 * New in Zulip 10.0 (feature level 315).
	 */
	is_archived: boolean;
	/**
	 * The short description of the channel in [Zulip-flavored Markdown](https://zulip.com/help/format-your-message-using-markdown) format,
	 * intended to be used to prepopulate UI for editing a channel's
	 * description.
	 */
	description: string;
	/**
	 * The UNIX timestamp for when the channel was created, in UTC seconds.
	 *
	 * New in Zulip 4.0 (feature level 30).
	 */
	date_created: number;
	/**
	 * The ID of the user who created this channel.
	 *
	 * New in Zulip 9.0 (feature level 254).
	 */
	creator_id: number | null;
	/**
	 * Specifies whether the channel is private or not.
	 * Only people who have been invited can access a private channel.
	 */
	invite_only: boolean;
	/**
	 * The short description of the channel rendered as HTML, intended to
	 * be used when displaying the channel description in a UI.
	 */
	rendered_description: string;
	/**
	 * Whether the channel has been configured to allow unauthenticated
	 * access to its message history from the web.
	 */
	is_web_public: boolean;
	/**
	 * A deprecated representation of a superset of the users who
	 * have permission to post messages to the channel available
	 * for backwards-compatibility. Clients should use
	 * `can_send_message_group` instead.
	 *
	 * New in Zulip 3.0 (feature level 1).
	 * @deprecated
	 */
	stream_post_policy: number;
	/**
	 * Number of days that messages sent to this channel will be stored
	 * before being automatically deleted by the [message retention
	 * policy](https://zulip.com/help/message-retention-policy). There are two special values:
	 *
	 * New in Zulip 3.0 (feature level 17).
	 */
	message_retention_days: number | null;
	/** Whether the history of the channel is public to its subscribers. */
	history_public_to_subscribers: boolean;
	/**
	 * Whether [named topics](https://zulip.com/help/introduction-to-topics) and the empty
	 * topic (i.e., ["general chat" topic](https://zulip.com/help/general-chat-topic))
	 * are enabled in this channel.
	 *
	 * New in Zulip 11.0 (feature level 392).
	 */
	topics_policy: TopicsPolicy;
	/** The ID of the first message in the channel. */
	first_message_id: number | null;
	/**
	 * The ID of the folder to which the channel belongs.
	 *
	 * New in Zulip 11.0 (feature level 389).
	 */
	folder_id: FolderId;
	/**
	 * Whether the channel has recent message activity. Clients should use this to implement
	 * [hide inactive channels](https://zulip.com/help/manage-inactive-channels) if
	 * `demote_inactive_streams` is enabled.
	 *
	 * New in Zulip 10.0 (feature level 323).
	 */
	is_recently_active: boolean;
	/**
	 * Whether the given channel is announcement only or not.
	 * @deprecated
	 */
	is_announcement_only: boolean;
	can_add_subscribers_group: ChannelCanAddSubscribersGroup;
	can_remove_subscribers_group: CanRemoveSubscribersGroup;
	can_administer_channel_group: CanAdministerChannelGroup;
	can_delete_any_message_group: CanDeleteAnyMessageGroup;
	can_delete_own_message_group: CanDeleteOwnMessageGroup;
	can_move_messages_out_of_channel_group: CanMoveMessagesOutOfChannelGroup;
	can_move_messages_within_channel_group: CanMoveMessagesWithinChannelGroup;
	can_send_message_group: CanSendMessageGroup;
	can_subscribe_group: CanSubscribeGroup;
	can_resolve_topics_group: CanResolveTopicsGroup;
	can_create_topic_group: CanCreateTopicGroup;
	/**
	 * The total number of non-deactivated users (including bots) who
	 * are subscribed to the channel. Clients are responsible for updating
	 * this value using `peer_add` and `peer_remove` events.
	 *
	 * New in Zulip 11.0 (feature level 394).
	 */
	subscriber_count: number;
}

export type BasicBot = BasicBotBase & {
	user_id?: unknown;
	default_sending_stream: unknown;
	default_events_register_stream: unknown;
	default_all_public_streams?: unknown;
	services?: unknown;
};

export interface BasicBotBase {
	/** The user ID of the bot. */
	user_id: number;
	/**
	 * The default sending channel of the bot. If `null`, the bot doesn't
	 * have a default sending channel.
	 */
	default_sending_stream: string | null;
	/**
	 * The default channel for which the bot receives events/register data.
	 * If `null`, the bot doesn't have such a default channel.
	 */
	default_events_register_stream: string | null;
	/** Whether the bot can send messages to all channels by default. */
	default_all_public_streams: boolean;
	/**
	 * An array containing extra configuration fields only relevant for
	 * outgoing webhook bots and embedded bots. This is always a single-element
	 * array.
	 */
	services: ({
		/** The URL the outgoing webhook is configured to post to. */
		base_url: string;
		/**
		 * A unique token that the third-party service can use to confirm
		 * that the request is indeed coming from Zulip.
		 */
		token: string;
		/** An integer indicating what format requests are posted in: */
		interface: number;
	} | {
		/** The name of the bot. */
		service_name: string;
		/**
		 * A dictionary of string key/value pairs, which describe the configuration
		 * for the bot. These are usually details like API keys, and are unique to
		 * the integration/bot. Can be an empty dictionary.
		 */
		config_data: BotConfiguration;
	})[];
}

export type Bot = BasicBotBase & {
	user_id?: unknown;
	default_sending_stream: unknown;
	default_events_register_stream: unknown;
	default_all_public_streams?: unknown;
	services?: unknown;
};

/**
 * A dictionary of string key/value pairs, which describe the configuration
 * for the bot. These are usually details like API keys, and are unique to
 * the integration/bot. Can be an empty dictionary.
 */
export type BotConfiguration = Record<string, string>;

/**
 * An array of configuration options that can be set when creating
 * a bot user for this incoming webhook integration.
 */
export interface WebhookConfigOption {
	/** A key for the configuration option. */
	key: string;
	/** A human-readable label of the configuration option. */
	label: string;
	/**
	 * The name of the validator function for the configuration
	 * option.
	 */
	validator: string;
}[]

/**
 * An array of optional URL parameter options for the incoming webhook
 * integration. In the web app, these are used when
 * [generating a URL for an integration](https://zulip.com/help/generate-integration-url).
 *
 * New in Zulip 11.0 (feature level 403).
 */
export interface WebhookUrlOption {
	/** The name of the URL parameter. */
	key: string;
	/** The label used for the input field in the UI. */
	label: string;
	/** The type of input field this URL parameter maps to in the UI. */
	input_type: string;
}[]

/**
 * Dictionary containing the details of a custom profile field configured
 * for this organization.
 */
export interface CustomProfileField {
	/**
	 * The ID of the custom profile field. This will be referenced in the custom
	 * profile fields section of user objects.
	 */
	id: number;
	/**
	 * An integer indicating the type of the custom profile field, which determines
	 * how it is configured and displayed to users.
	 */
	type: number;
	/**
	 * Custom profile fields are displayed in both settings UI and
	 * UI showing users' profiles in increasing `order`.
	 */
	order: number;
	/** The name of the custom profile field. */
	name: string;
	/**
	 * The help text to be displayed for the custom profile field in user-facing
	 * settings UI for configuring custom profile fields.
	 */
	hint: string;
	/**
	 * Field types 3 (Dropdown) and 7 (External account) support storing
	 * additional configuration for the field type in the `field_data` attribute.
	 */
	field_data?: string;
	/**
	 * Whether the custom profile field, display or not on the user card.
	 *
	 * New in Zulip 6.0 (feature level 146).
	 */
	display_in_profile_summary?: boolean;
	/**
	 * Whether an organization administrator has configured this profile field as
	 * required.
	 *
	 * New in Zulip 9.0 (feature level 244).
	 */
	required: boolean;
	/**
	 * Whether regular users can edit this profile field on their own account.
	 *
	 * New in Zulip 10.0 (feature level 296).
	 */
	editable_by_user: boolean;
	/**
	 * Whether this custom profile field should be used to match users in typeahead
	 * suggestions. Only allowed for Short Text and External Account
	 * [profile field types](https://zulip.com/help/custom-profile-fields#profile-field-types).
	 *
	 * New in Zulip 12.0 (feature level 455).
	 */
	use_for_user_matching?: boolean;
}

/** Dictionary containing details of a single onboarding step. */
export interface OnboardingStep {
	/**
	 * The type of the onboarding step. Valid value is `"one_time_notice"`.
	 *
	 * New in Zulip 8.0 (feature level 233).
	 */
	type: string;
	/** The name of the onboarding step. */
	name: string;
}

/**
 * Dictionary describing the properties of an authentication method for the
 * organization - its enabled status and availability for use by the
 * organization.
 */
export interface RealmAuthenticationMethod {
	/**
	 * Boolean describing whether the authentication method (i.e. its key)
	 * is enabled in this organization.
	 */
	enabled: boolean;
	/**
	 * Boolean describing whether the authentication method is available for use.
	 * If false, the organization is not eligible to enable the authentication
	 * method.
	 */
	available: boolean;
	/**
	 * Reason why the authentication method is unavailable. This field is optional
	 * and is only present when 'available' is false.
	 */
	unavailable_reason?: string;
}

/**
 * Object containing details about an emoji. It has the
 * following properties:
 */
export interface RealmEmoji {
	/** The ID for this emoji, same as the object's key. */
	id: string;
	/**
	 * The user-friendly name for this emoji. Users in the organization
	 * can use this emoji by writing this name between colons (`:name :`).
	 */
	name: string;
	/**
	 * The path relative to the organization's URL where the
	 * emoji's image can be found.
	 */
	source_url: string;
	/** Only non-null when the emoji's image is animated. */
	still_url: string | null;
	/** Whether the emoji has been deactivated or not. */
	deactivated: boolean;
	/**
	 * The user ID of the user who uploaded the custom emoji.
	 * Will be `null` if the uploader is unknown.
	 *
	 * New in Zulip 3.0 (feature level 7).
	 */
	author_id: number | null;
}

export interface RealmDomain {
	/** The allowed domain. */
	domain: string;
	/** Whether subdomains are allowed for this domain. */
	allow_subdomains: boolean;
}

/** Object containing details about a realm playground. */
export interface RealmPlayground {
	/** The unique ID for the realm playground. */
	id: number;
	/**
	 * The user-visible display name of the playground. Clients
	 * should display this in UI for picking which playground to
	 * open a code block in, to differentiate between multiple
	 * configured playground options for a given pygments
	 * language.
	 *
	 * New in Zulip 4.0 (feature level 49).
	 */
	name: string;
	/**
	 * The name of the Pygments language lexer for that
	 * programming language.
	 */
	pygments_language: string;
	/**
	 * The [RFC 6570](https://www.rfc-editor.org/rfc/rfc6570.html)
	 * compliant URL template for the playground. The template contains
	 * exactly one variable named `code`, which determines how the
	 * extracted code should be substituted in the playground URL.
	 *
	 * New in Zulip 8.0 (feature level 196).
	 */
	url_template: string;
}

/**
 * Object containing details about a
 * [data export](https://zulip.com/help/export-your-organization).
 */
export interface RealmExport {
	/** The ID of the data export. */
	id: number;
	/** The ID of the user who created the data export. */
	acting_user_id: number;
	/** The UNIX timestamp of when the data export was started. */
	export_time: number;
	/** The UNIX timestamp of when the data export was deleted. */
	deleted_timestamp: number | null;
	/** The UNIX timestamp of when the data export failed. */
	failed_timestamp: number | null;
	/** The URL to download the generated data export. */
	export_url: string | null;
	/**
	 * Whether the data export is pending, which indicates it
	 * is still being generated, or if it succeeded, failed or
	 * was deleted before being generated.
	 */
	pending: boolean;
	/**
	 * Whether this data export happened on a previous server,
	 * and thus its tarball is no longer stored on this server.
	 * This is `true` for records that were carried across a
	 * realm import; the record is preserved for audit purposes
	 * but its data is no longer available for download.
	 *
	 * New in Zulip 12.1 (feature level 499).
	 */
	export_from_prior_server: boolean;
	/**
	 * Whether the data export is public, full with consent, or full without consent.
	 *
	 * New in Zulip 10.0 (feature level 304).
	 */
	export_type?: "public" | "full_with_consent" | "full_without_consent";
}

/** Object containing the user group's attributes. */
export interface UserGroup {
	/** The name of the user group. */
	name: string;
	/**
	 * The UNIX timestamp for when the user group was created, in UTC seconds.
	 *
	 * New in Zulip 10.0 (feature level 292).
	 */
	date_created: number | null;
	/**
	 * The ID of the user who created this user group.
	 *
	 * New in Zulip 10.0 (feature level 292).
	 */
	creator_id: number | null;
	/** The description of the user group. */
	description: string;
	/**
	 * Array containing the ID of the users who are
	 * members of this user group.
	 */
	members: number[];
	/**
	 * Array containing the ID of the direct_subgroups of
	 * this user group.
	 *
	 * New in Zulip 6.0 (feature level 131).
	 */
	direct_subgroup_ids: number[];
	/** The ID of the user group. */
	id: number;
	/**
	 * Whether the user group is a system group which cannot be
	 * directly modified by users.
	 *
	 * New in Zulip 5.0 (feature level 93).
	 */
	is_system_group: boolean;
	can_add_members_group: GroupSettingValue;
	can_join_group: GroupSettingValue;
	can_leave_group: GroupSettingValue;
	can_manage_group: GroupSettingValue;
	can_mention_group: GroupSettingValue;
	can_remove_members_group: GroupSettingValue;
	/**
	 * Whether the user group is deactivated. Deactivated groups
	 * cannot be used as a subgroup of another group or used for
	 * any other purpose.
	 *
	 * New in Zulip 10.0 (feature level 290).
	 */
	deactivated: boolean;
}

export type GroupSettingValue = number | {
	/** The list of IDs of individual users in the collection of users with this permission. */
	direct_members?: number[];
	/** The list of IDs of the groups in the collection of users with this permission. */
	direct_subgroups?: number[];
};

export interface GroupSettingValueUpdate {
	new: GroupSettingValue;
	old?: GroupSettingValue;
}

/** A dictionary containing details about an [invitation](https://zulip.com/help/invite-new-users). */
export interface Invite {
	/** The ID of the invitation. */
	id: number;
	/**
	 * The [user ID](https://zulip.com/api/get-user) of the user who created the invitation.
	 *
	 * New in Zulip 3.0 (feature level 22).
	 */
	invited_by_user_id: number;
	/** The UNIX timestamp for when the invitation was created, in UTC seconds. */
	invited: number;
	/**
	 * The UNIX timestamp for when the invitation will expire, in UTC seconds.
	 * If `null`, the invitation never expires.
	 */
	expiry_date: number | null;
	/**
	 * The [organization-level role](https://zulip.com/api/roles-and-permissions) of the user that
	 * is created when the invitation is accepted.
	 * Possible values are:
	 */
	invited_as: 100 | 200 | 300 | 400 | 600;
	/**
	 * The email address the invitation was sent to. This will not be present when
	 * `is_multiuse` is `true` (i.e. the invitation is a reusable invitation link).
	 */
	email?: string;
	/**
	 * A boolean indicating whether the referrer has opted to receive a direct
	 * message from [notification bot](https://zulip.com/help/configure-automated-notices) when a user
	 * account is created using this invitation.
	 *
	 * New in Zulip 9.0 (feature level 267).
	 */
	notify_referrer_on_join: boolean;
	/**
	 * The URL of the reusable invitation link. This will not be present when
	 * `is_multiuse` is `false` (i.e. the invitation is an email invitation).
	 */
	link_url?: string;
	/**
	 * A boolean specifying whether the [invitation](https://zulip.com/help/invite-new-users) is a
	 * reusable invitation link or an email invitation.
	 */
	is_multiuse: boolean;
}

/**
 * The number of minutes before the invitation will expire. If `null`, the
 * invitation will never expire. If unspecified, the server will use a default
 * value (based on the `INVITATION_LINK_VALIDITY_MINUTES` server setting, which
 * defaults to 14400, i.e. 10 days) for when the invitation will expire.
 *
 * New in Zulip 6.0 (feature level 126).
 */
export type InviteExpirationParameter = number | null;

/**
 * The [organization-level role](https://zulip.com/api/roles-and-permissions) of the user that is
 * created when the invitation is accepted.
 * Possible values are:
 */
export type InviteRoleParameter = 100 | 200 | 300 | 400 | 600;

export interface Subscription {
	/** The unique ID of a channel. */
	stream_id: number;
	/** The name of a channel. */
	name: string;
	/**
	 * The [description](https://zulip.com/help/change-the-channel-description) of the channel in [Zulip-flavored Markdown](https://zulip.com/help/format-your-message-using-markdown) format,
	 * intended to be used to prepopulate UI for editing a channel's
	 * description.
	 */
	description: string;
	/**
	 * The [description](https://zulip.com/help/change-the-channel-description) of the channel rendered as HTML, intended to
	 * be used when displaying the channel description in a UI.
	 */
	rendered_description: string;
	/**
	 * The UNIX timestamp for when the channel was created, in UTC seconds.
	 *
	 * New in Zulip 4.0 (feature level 30).
	 */
	date_created: number;
	/**
	 * The ID of the user who created this channel.
	 *
	 * New in Zulip 9.0 (feature level 254).
	 */
	creator_id: number | null;
	/**
	 * Specifies whether the channel is private or not.
	 * Only people who have been invited can access a private channel.
	 */
	invite_only: boolean;
	/**
	 * A list of user IDs of users who are also subscribed
	 * to a given channel. Included only if `include_subscribers` is `true`.
	 */
	subscribers: number[];
	/**
	 * If [`include_subscribers="partial"`](https://zulip.com/api/get-subscriptions#parameter-include_subscribers)
	 * was requested, the server may, at its discretion, send a
	 * `partial_subscribers` list rather than a `subscribers` list
	 * for channels with a large number of subscribers.
	 *
	 * New in Zulip 11.0 (feature level 412).
	 */
	partial_subscribers: number[];
	/**
	 * A boolean specifying whether desktop notifications
	 * are enabled for the given channel.
	 */
	desktop_notifications: boolean | null;
	/**
	 * A boolean specifying whether email notifications
	 * are enabled for the given channel.
	 */
	email_notifications: boolean | null;
	/**
	 * A boolean specifying whether wildcard mentions
	 * trigger notifications as though they were personal
	 * mentions in this channel.
	 */
	wildcard_mentions_notify: boolean | null;
	/**
	 * A boolean specifying whether push notifications
	 * are enabled for the given channel.
	 */
	push_notifications: boolean | null;
	/**
	 * A boolean specifying whether audible notifications
	 * are enabled for the given channel.
	 */
	audible_notifications: boolean | null;
	/**
	 * A boolean specifying whether the given channel has been pinned
	 * to the top.
	 */
	pin_to_top: boolean;
	/**
	 * Whether the user has muted the channel. Muted channels do
	 * not count towards your total unread count and do not show
	 * up in the `Combined feed` view (previously known as `All messages`).
	 */
	is_muted: boolean;
	/**
	 * Legacy property for if the given channel is muted, with inverted meaning.
	 * @deprecated
	 */
	in_home_view: boolean;
	/**
	 * Whether only organization administrators can post to the channel.
	 * @deprecated
	 */
	is_announcement_only: boolean;
	/**
	 * Whether the channel has been configured to allow unauthenticated
	 * access to its message history from the web.
	 */
	is_web_public: boolean;
	/** The user's personal color for the channel. */
	color: string;
	/**
	 * A deprecated representation of a superset of the users who
	 * have permission to post messages to the channel available
	 * for backwards-compatibility. Clients should use
	 * `can_send_message_group` instead.
	 *
	 * New in Zulip 3.0 (feature level 1).
	 * @deprecated
	 */
	stream_post_policy: number;
	/**
	 * Number of days that messages sent to this channel will be stored
	 * before being automatically deleted by the [message retention
	 * policy](https://zulip.com/help/message-retention-policy). There are two special values:
	 *
	 * New in Zulip 3.0 (feature level 17).
	 */
	message_retention_days: number | null;
	/** Whether the history of the channel is public to its subscribers. */
	history_public_to_subscribers: boolean;
	/** The ID of the first message in the channel. */
	first_message_id: number | null;
	/**
	 * The ID of the folder to which the channel belongs.
	 *
	 * New in Zulip 11.0 (feature level 389).
	 */
	folder_id: FolderId;
	/**
	 * Whether [named topics](https://zulip.com/help/introduction-to-topics) and the empty
	 * topic (i.e., ["general chat" topic](https://zulip.com/help/general-chat-topic))
	 * are enabled in this channel.
	 *
	 * New in Zulip 11.0 (feature level 392).
	 */
	topics_policy: TopicsPolicy;
	/**
	 * Whether the channel has recent message activity. Clients should use this to implement
	 * [hiding inactive channels](https://zulip.com/help/manage-inactive-channels).
	 *
	 * New in Zulip 10.0 (feature level 323).
	 */
	is_recently_active: boolean;
	/**
	 * The average number of messages sent to the channel per week, as
	 * estimated based on recent weeks, rounded to the nearest integer.
	 */
	stream_weekly_traffic: number | null;
	can_add_subscribers_group: ChannelCanAddSubscribersGroup;
	can_remove_subscribers_group: CanRemoveSubscribersGroup;
	can_administer_channel_group: CanAdministerChannelGroup;
	can_delete_any_message_group: CanDeleteAnyMessageGroup;
	can_delete_own_message_group: CanDeleteOwnMessageGroup;
	can_move_messages_out_of_channel_group: CanMoveMessagesOutOfChannelGroup;
	can_move_messages_within_channel_group: CanMoveMessagesWithinChannelGroup;
	can_send_message_group: CanSendMessageGroup;
	can_subscribe_group: CanSubscribeGroup;
	can_resolve_topics_group: CanResolveTopicsGroup;
	can_create_topic_group: CanCreateTopicGroup;
	/**
	 * A boolean indicating whether the channel is [archived](https://zulip.com/help/archive-a-channel).
	 *
	 * New in Zulip 10.0 (feature level 315).
	 */
	is_archived?: boolean;
	/**
	 * The total number of non-deactivated users (including bots) who
	 * are subscribed to the channel. Clients are responsible for updating
	 * this value using `peer_add` and `peer_remove` events.
	 *
	 * New in Zulip 11.0 (feature level 394).
	 */
	subscriber_count: number;
}

/**
 * Dictionary containing details of a default channel
 * group.
 */
export interface DefaultChannelGroup {
	/** Name of the default channel group. */
	name: string;
	/** Description of the default channel group. */
	description: string;
	/** The ID of the default channel group. */
	id: number;
	/** An array of IDs of all the channels in the default stream group. */
	streams: number[];
}

/**
 * The [policy][permission-level] for [which other users][help-email-visibility]
 * in this organization can see the user's real email address.
 *
 * New in Zulip 7.0 (feature level 163).
 */
export type EmailAddressVisibility = number;

export type EmojiReaction = EmojiBase & {
	emoji_code?: unknown;
	emoji_name?: unknown;
	reaction_type?: unknown;
	/**
	 * The ID of the user who added the reaction.
	 *
	 * New in Zulip 3.0 (feature level 2).
	 */
	user_id: number;
};

export interface EmojiBase {
	/** Name of the emoji. */
	emoji_name: string;
	/**
	 * A unique identifier, defining the specific emoji codepoint requested,
	 * within the namespace of the `reaction_type`.
	 */
	emoji_code: string;
	/**
	 * A string indicating the type of emoji. Each emoji `reaction_type`
	 * has an independent namespace for values of `emoji_code`.
	 */
	reaction_type: "unicode_emoji" | "realm_emoji" | "zulip_extra_emoji";
}

export type EmojiReactionEvent = EmojiBase & {
	/**
	 * The ID of the user who added the reaction.
	 *
	 * New in Zulip 3.0 (feature level 2).
	 */
	user_id: number;
};

export type MessagesEvent = MessagesBase & {
	avatar_url: unknown;
	client?: unknown;
	content?: unknown;
	content_type?: unknown;
	display_recipient?: unknown;
	edit_history?: unknown;
	id?: unknown;
	is_me_message?: unknown;
	last_edit_timestamp?: unknown;
	last_moved_timestamp?: unknown;
	reactions?: unknown;
	recipient_id?: unknown;
	sender_email?: unknown;
	sender_full_name?: unknown;
	sender_id?: unknown;
	sender_realm_str?: unknown;
	stream_id?: unknown;
	subject?: unknown;
	submessages?: unknown;
	timestamp?: unknown;
	topic_links?: unknown;
	type?: unknown;
};

/** Object containing details of the message. */
export interface MessagesBase {
	/**
	 * The URL of the message sender's avatar. Can be `null` only if
	 * the current user has access to the sender's real email address
	 * and `client_gravatar` was `true`.
	 */
	avatar_url: string | null;
	/**
	 * A Zulip "client" string, describing what Zulip client
	 * sent the message.
	 */
	client: string;
	/**
	 * The content/body of the message.
	 * When `apply_markdown` is set, it will be in HTML format.
	 */
	content: string;
	/**
	 * The HTTP `content_type` for the message content. This
	 * will be `text/html` or `text/x-markdown`, depending on
	 * whether `apply_markdown` was set.
	 */
	content_type: string;
	/** Data on the recipient of the message. Will be one of the following: */
	display_recipient: string | {
		/** ID of the user. */
		id: number;
		/** Zulip API email of the user. */
		email: string;
		/** Full name of the user. */
		full_name: string;
		/** Whether the user is a mirror dummy. */
		is_mirror_dummy: boolean;
	}[];
	/**
	 * An array of objects, with each object documenting the
	 * changes in a previous edit made to the message,
	 * ordered chronologically from most recent to least recent
	 * edit.
	 */
	edit_history?: {
		/** Only present if message's content was edited. */
		prev_content?: string;
		/** Only present if message's content was edited. */
		prev_rendered_content?: string;
		/**
		 * Only present if message's channel was edited.
		 *
		 * New in Zulip 3.0 (feature level 1).
		 */
		prev_stream?: number;
		/**
		 * Only present if message's topic was edited.
		 *
		 * New in Zulip 5.0 (feature level 118).
		 */
		prev_topic?: string;
		/**
		 * Only present if message's channel was edited.
		 *
		 * New in Zulip 5.0 (feature level 118).
		 */
		stream?: number;
		/** The UNIX timestamp for the edit. */
		timestamp: number;
		/**
		 * Only present if message's topic was edited.
		 *
		 * New in Zulip 5.0 (feature level 118).
		 */
		topic?: string;
		/** The ID of the user that made the edit. */
		user_id: number | null;
	}[];
	/**
	 * The unique message ID. Messages should always be
	 * displayed sorted by ID.
	 */
	id: number;
	/** Whether the message is a [/me status message][status-messages] */
	is_me_message: boolean;
	/**
	 * The UNIX timestamp for when the message's content was last edited, in
	 * UTC seconds.
	 */
	last_edit_timestamp?: number;
	/**
	 * The UNIX timestamp for when the message was last moved to a different
	 * channel or topic, in UTC seconds.
	 *
	 * New in Zulip 10.0 (feature level 365).
	 */
	last_moved_timestamp?: number;
	/**
	 * Data on any [reactions](https://zulip.com/help/emoji-reactions) to the message,
	 * ordered chronologically from oldest to newest reaction.
	 */
	reactions: EmojiReaction[];
	/**
	 * A unique ID for the set of users receiving the
	 * message (either a channel or group of users). Useful primarily
	 * for hashing.
	 */
	recipient_id: number;
	/** The Zulip API email address of the message's sender. */
	sender_email: string;
	/** The full name of the message's sender. */
	sender_full_name: string;
	/** The user ID of the message's sender. */
	sender_id: number;
	/**
	 * A string identifier for the realm the sender is in. Unique only within
	 * the context of a given Zulip server.
	 */
	sender_realm_str: string;
	/** Only present for channel messages; the ID of the channel. */
	stream_id?: number;
	/**
	 * The `topic` of the message. Currently always `""` for direct messages,
	 * though this could change if Zulip adds support for topics in direct
	 * message conversations.
	 */
	subject: string;
	/** Data used for certain experimental Zulip integrations. */
	submessages: {
		/** The type of the message. */
		msg_type: string;
		/** The new content of the submessage. */
		content: string;
		/** The ID of the message to which the submessage has been added. */
		message_id: number;
		/** The ID of the user who sent the message. */
		sender_id: number;
		/** The ID of the submessage. */
		id: number;
	}[];
	/**
	 * The UNIX timestamp for when the message was sent,
	 * in UTC seconds.
	 */
	timestamp: number;
	/**
	 * Data on any links to be included in the `topic`
	 * line (these are generated by [custom linkification
	 * filters](https://zulip.com/help/add-a-custom-linkifier) that match content in the
	 * message's topic.)
	 *
	 * New in Zulip 3.0 (feature level 1).
	 */
	topic_links?: {
		/** The original link text present in the topic. */
		text: string;
		/** The expanded target url which the link points to. */
		url: string;
	}[];
	/** The type of the message: `"stream"` or `"private"`. */
	type: string;
}

/**
 * `{user_id}`: Presence data (modern format) for the user with
 * the specified ID.
 */
export interface ModernPresenceFormat {
	/**
	 * The UNIX timestamp of the last time a client connected
	 * to Zulip reported that the user was actually present
	 * (e.g. via focusing a browser window or interacting
	 * with a computer running the desktop app).
	 */
	active_timestamp: number;
	/**
	 * The UNIX timestamp of the last time the user had a
	 * client connected to Zulip, including idle clients
	 * where the user hasn't interacted with the system
	 * recently.
	 */
	idle_timestamp: number;
}

/**
 * `{client_name}` or `"aggregated"`: Object containing the details of the user's
 * presence.
 */
export interface LegacyPresenceFormat {
	/** The client's platform name. */
	client: string;
	/**
	 * The status of the user on this client. Will be either `"idle"`
	 * or `"active"`.
	 */
	status: "idle" | "active";
	/**
	 * The UNIX timestamp of when this client sent the user's presence
	 * to the server with the precision of a second.
	 */
	timestamp: number;
	/**
	 * Whether the client is capable of showing mobile/push notifications
	 * to the user.
	 */
	pushable?: boolean;
}

export interface UserStatus {
	/**
	 * If present, the user has marked themself "away".
	 * @deprecated
	 */
	away?: boolean;
	/** If present, the text content of the user's status message. */
	status_text?: string;
	/**
	 * If present, the name for the emoji to associate with the user's status.
	 *
	 * New in Zulip 5.0 (feature level 86).
	 */
	emoji_name?: string;
	/**
	 * If present, a unique identifier, defining the specific emoji codepoint
	 * requested, within the namespace of the `reaction_type`.
	 *
	 * New in Zulip 5.0 (feature level 86).
	 */
	emoji_code?: string;
	/**
	 * If present, a string indicating the type of emoji. Each emoji
	 * `reaction_type` has an independent namespace for values of `emoji_code`.
	 *
	 * New in Zulip 5.0 (feature level 86).
	 */
	reaction_type?: "unicode_emoji" | "realm_emoji" | "zulip_extra_emoji";
}

/** A dictionary for representing a message draft. */
export interface Draft {
	/** The unique ID of the draft. */
	id?: number;
	/**
	 * The type of the draft. Either unaddressed (empty string), `"stream"`,
	 * or `"private"` (for one-on-one and group direct messages).
	 */
	type: "" | "stream" | "private";
	/**
	 * An array of the tentative target audience IDs. For channel
	 * messages, this should contain exactly 1 ID, the ID of the
	 * target channel. For direct messages, this should be an array
	 * of target user IDs. For unaddressed drafts, this is ignored,
	 * and clients should send an empty array.
	 */
	to: number[];
	/**
	 * For channel message drafts, the tentative topic name. For direct
	 * or unaddressed messages, this will be ignored and should ideally
	 * be the empty string. Should not contain null bytes.
	 */
	topic: string;
	/** The body of the draft. Should not contain null bytes. */
	content: string;
	/**
	 * A Unix timestamp (seconds only) representing when the draft was
	 * last edited. When creating a draft, this key need not be present
	 * and it will be filled in automatically by the server.
	 */
	timestamp?: number;
}

/**
 * Represents a user's personal configuration for a specific
 * navigation view (displayed most visibly at the top of the web
 * application's left sidebar).
 *
 * New in Zulip 11.0 (feature level 390).
 */
export interface NavigationView {
	/**
	 * A unique identifier for the view, used to determine navigation
	 * behavior when clicked.
	 */
	fragment: string;
	/**
	 * Determines whether the view appears directly in the sidebar or
	 * is hidden in the "More Views" menu.
	 */
	is_pinned: boolean;
	/**
	 * The user-facing name for custom navigation views. Omit this
	 * field for built-in views.
	 */
	name?: string | null;
}

/** Object containing the details of the saved snippet. */
export interface SavedSnippet {
	/** The unique ID of the saved snippet. */
	id: number;
	/** The title of the saved snippet. */
	title: string;
	/** The content of the saved snippet in [Zulip-flavored Markdown](https://zulip.com/help/format-your-message-using-markdown) format. */
	content: string;
	/**
	 * The UNIX timestamp for when the saved snippet was created, in
	 * UTC seconds.
	 */
	date_created: number;
}

/** Object containing details of the scheduled message. */
export interface ScheduledMessageBase {
	/**
	 * The unique ID of the scheduled message, which can be used to
	 * modify or delete the scheduled message.
	 */
	scheduled_message_id: number;
	/** The type of the scheduled message. Either `"stream"` or `"private"`. */
	type: "stream" | "private";
	/** The scheduled message's tentative target audience. */
	to: number | number[];
	/** Only present if `type` is `"stream"`. */
	topic?: string;
	/** The content/body of the scheduled message, in [Zulip-flavored Markdown](https://zulip.com/help/format-your-message-using-markdown) format. */
	content: string;
	/** The content/body of the scheduled message rendered in HTML. */
	rendered_content: string;
	/**
	 * The UNIX timestamp for when the message will be sent
	 * by the server, in UTC seconds.
	 */
	scheduled_delivery_timestamp: number;
	/**
	 * Whether the server has tried to send the scheduled message
	 * and it failed to successfully send.
	 *
	 * New in Zulip 7.0 (feature level 181).
	 */
	failed: boolean;
}

export type ScheduledMessage = ScheduledMessageBase & {
	scheduled_message_id?: unknown;
	type?: unknown;
	to?: unknown;
	topic?: unknown;
	content?: unknown;
	rendered_content?: unknown;
	scheduled_delivery_timestamp?: unknown;
	failed?: unknown;
};

/** Object containing details of the scheduled message. */
export interface Reminder {
	/**
	 * The unique ID of the reminder, which can be used to
	 * delete the reminder.
	 */
	reminder_id: number;
	/** The type of the reminder. Always set to `"private"`. */
	type: "private";
	/**
	 * Contains the ID of the user who scheduled the reminder,
	 * and to which the reminder will be sent.
	 */
	to: number[];
	/** The content/body of the reminder, in [Zulip-flavored Markdown](https://zulip.com/help/format-your-message-using-markdown) format. */
	content: string;
	/** The content/body of the reminder rendered in HTML. */
	rendered_content: string;
	/**
	 * The UNIX timestamp for when the message will be sent
	 * by the server, in UTC seconds.
	 */
	scheduled_delivery_timestamp: number;
	/**
	 * Whether the server has tried to send the reminder
	 * and it failed to successfully send.
	 */
	failed: boolean;
	/** The ID of the message that the reminder is created for. */
	reminder_target_message_id: number;
}

/**
 * Configuration for a group permission setting specifying the groups
 * to which the setting can be set to and the default values for the
 * setting.
 */
export interface GroupPermissionSetting {
	/** Whether the setting can only be set to a system user group. */
	require_system_group: boolean;
	/** Whether the setting can be set to `role:internet` system group. */
	allow_internet_group: boolean;
	/** Whether the setting can be set to `role:nobody` system group. */
	allow_nobody_group: boolean;
	/** Whether the setting can be set to `role:everyone` system group. */
	allow_everyone_group: boolean;
	/** Name of the default system group for the setting. */
	default_group_name: string;
	/** Name of the default group for the setting for system groups. */
	default_for_system_groups: string | null;
	/**
	 * An array of names of system groups to which the setting can
	 * be set to.
	 *
	 * New in Zulip 8.0 (feature level 225).
	 */
	allowed_system_groups: string[];
}

export type User = UserBase & {
	user_id?: unknown;
	delivery_email: unknown;
	email?: unknown;
	full_name?: unknown;
	date_joined?: unknown;
	is_active?: unknown;
	is_owner?: unknown;
	is_admin?: unknown;
	is_guest?: unknown;
	is_bot?: unknown;
	bot_type: unknown;
	bot_owner_id: unknown;
	role?: unknown;
	timezone?: unknown;
	avatar_url: unknown;
	avatar_version?: unknown;
	is_imported_stub?: unknown;
	is_deleted?: unknown;
	/** Only present if `is_bot` is false; bots can't have custom profile fields. */
	profile_data?: ProfileData;
};

/** A dictionary containing basic data on a given Zulip user. */
export interface UserBase {
	/** The unique ID of the user. */
	user_id: number;
	/**
	 * The user's real email address. This value will be `null` if you cannot
	 * access user's real email address. For bot users, this field is always
	 * set to the real email of the bot, because bot users always have
	 * `email_address_visibility` set to everyone.
	 */
	delivery_email?: string | null;
	/** The Zulip API email address of the user or bot. */
	email: string;
	/** Full name of the user or bot, used for all display purposes. */
	full_name: string;
	/**
	 * The time when the user joined. For users imported from other
	 * applications and users created via the API, this is set to the
	 * account creation time until the user logs in for the first time,
	 * after which it is updated to that login time.
	 */
	date_joined: string;
	/** A boolean specifying whether the user account has been deactivated. */
	is_active: boolean;
	/**
	 * A boolean specifying whether the user is an organization owner.
	 * If true, `is_admin` will also be true.
	 *
	 * New in Zulip 3.0 (feature level 8).
	 */
	is_owner: boolean;
	/** A boolean specifying whether the user is an organization administrator. */
	is_admin: boolean;
	/** A boolean specifying whether the user is a guest user. */
	is_guest: boolean;
	/** A boolean specifying whether the user is a bot or full account. */
	is_bot: boolean;
	/** An integer describing the type of bot: */
	bot_type: number | null;
	/**
	 * If the user is a bot (i.e. `is_bot` is true), then `bot_owner_id`
	 * is the user ID of the bot's owner (usually, whoever created the bot).
	 *
	 * New in Zulip 3.0 (feature level 1).
	 */
	bot_owner_id: number | null;
	/**
	 * - 100 = Organization owner
	 * - 200 = Organization administrator
	 * - 300 = Organization moderator
	 * - 400 = Member
	 * - 600 = Guest
	 *
	 * New in Zulip 4.0 (feature level 59).
	 */
	role: 100 | 200 | 300 | 400 | 600;
	/**
	 * The IANA identifier of the user's [profile time zone](https://zulip.com/help/change-your-timezone),
	 * which is used primarily to display the user's local time to other users.
	 */
	timezone: string;
	/** URL for the user's avatar. */
	avatar_url: string | null;
	/**
	 * Version for the user's avatar. Used for cache-busting requests
	 * for the user's avatar. Clients generally shouldn't need to use this;
	 * most avatar URLs sent by Zulip will already end with `?v={avatar_version}`.
	 */
	avatar_version: number;
	/**
	 * Indicates whether this user object is a stub account imported from
	 * another chat system. Stub accounts are used to represent the senders
	 * for imported messages. Stub accounts can be converted to regular Zulip
	 * accounts when the user starts using Zulip, preserving that imported
	 * user's message history.
	 *
	 * New in Zulip 12.0 (feature level 433).
	 */
	is_imported_stub: boolean;
	/**
	 * A boolean specifying whether the user has been permanently
	 * deleted. Deleted users are a subset of deactivated users
	 * (`is_active=false`) who have had their account data removed.
	 *
	 * New in Zulip 12.0 (feature level 490).
	 */
	is_deleted?: boolean;
}

/** Only present if `is_bot` is false; bots can't have custom profile fields. */
export type ProfileData = Record<string, {
		/** User's personal value for this custom profile field. */
		value: string;
		/**
		 * The `value` rendered in HTML. Will only be present for
		 * custom profile field types that support Markdown rendering.
		 */
		rendered_value?: string;
	}>;

export interface ProfileDataUpdate {
	/** The ID of the custom profile field to update. */
	id: number;
	/** The new value for the user of the specified custom profile field. */
	value: string | null | number[];
}

/** Object containing the channel folder's attributes. */
export interface ChannelFolder {
	/** The unique ID of the channel folder. */
	id: number;
	/** The name of the channel folder. */
	name: string;
	/**
	 * This value determines in which order the channel folder should be
	 * displayed in the UI. The value is 0 indexed, and a channel folder with
	 * a lower value should be displayed before channel folders with higher
	 * values.
	 *
	 * New in Zulip 11.0 (feature level 414).
	 */
	order: number;
	/**
	 * The UNIX timestamp for when the channel folder was created,
	 * in UTC seconds.
	 */
	date_created: number | null;
	/** The ID of the user who created the channel folder. */
	creator_id: number | null;
	/** The description of the channel folder. Can be an empty string. */
	description: string;
	/**
	 * The description of the channel folder rendered as HTML, intended to be
	 * used for UI that displays the channel folder description.
	 */
	rendered_description: string;
	/** Whether the channel folder is archived or not. */
	is_archived: boolean;
}

export interface JsonResponseBase {
	result: string;
}

export type JsonSuccess = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
};

/** A typical successful JSON response may look like: */
export type JsonSuccessBase = JsonResponseBase & {
	result: "success";
	msg: string;
	/**
	 * An array of any parameters sent in the request that are not
	 * supported by the endpoint.
	 */
	ignored_parameters_unsupported?: IgnoredParametersUnsupported;
};

/**
 * Previously, it was added to
 * [`POST /users/me/subscriptions/properties`](https://zulip.com/api/update-subscription-settings)
 * in Zulip 5.0 (feature level 111) and to
 * [`PATCH /realm/user_settings_defaults`](https://zulip.com/api/update-realm-user-settings-defaults)
 * in Zulip 5.0 (feature level 96). The feature was introduced in Zulip 5.0
 * (feature level 78) as a return value for the
 * [`PATCH /settings`](https://zulip.com/api/update-settings) endpoint.
 */
export type IgnoredParametersSuccess = IgnoredParametersBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
};

export type IgnoredParametersBase = JsonResponseBase & {
	result: "success";
	msg: string;
	/**
	 * An array of any parameters sent in the request that are not
	 * supported by the endpoint.
	 */
	ignored_parameters_unsupported?: IgnoredParametersUnsupported;
};

export type ApiKeyResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The API key that can be used to authenticate as the requested user. */
	api_key: string;
	/** The email address of the user who owns the API key. */
	email: string;
	/**
	 * The unique ID of the user who owns the API key.
	 *
	 * New in Zulip 7.0 (feature level 171).
	 */
	user_id?: number;
};

export type CodedError = CodedErrorBase & {
	result?: unknown;
	msg?: unknown;
	code?: unknown;
};

export type CodedErrorBase = JsonResponseBase & {
	result: "error";
	msg: string;
	/** A string that identifies the error. */
	code: string;
};

export type BadEventQueueIdError = CodedErrorBase & {
	result?: unknown;
	msg?: unknown;
	code?: unknown;
	/** The string that identifies the invalid event queue. */
	queue_id: string;
};

export type InvalidMessageError = CodedErrorBase & {
	result?: unknown;
	msg?: unknown;
	code?: unknown;
};

export type InvalidChannelError = CodedErrorBase & {
	result?: unknown;
	msg?: unknown;
	code?: unknown;
};

export type NonExistingChannelNameError = CodedErrorBase & {
	result?: unknown;
	msg?: unknown;
	code?: unknown;
	/** The name of the channel that could not be found. */
	stream: string;
};

export type NonExistingChannelIdError = CodedErrorBase & {
	result?: unknown;
	msg?: unknown;
	code?: unknown;
	/** The channel ID that could not be found. */
	stream_id: number;
};

export type InvalidApiKeyError = CodedError;

export type InvitationFailedError = CodedErrorBase & {
	result?: unknown;
	msg?: unknown;
	code?: unknown;
	/**
	 * An array of arrays of length 3, where each inner array consists of (a) an email
	 * address that was skipped while sending invitations, (b) the corresponding error
	 * message, and (c) a boolean which is `true` when the email address already uses Zulip
	 * and the corresponding user is deactivated in the organization.
	 */
	errors: (string | boolean)[][];
	/** A boolean specifying whether any invitations were sent. */
	sent_invitations: boolean;
	/**
	 * A boolean specifying whether the limit on the number of invitations that can
	 * be sent in the organization in a day has been reached.
	 */
	daily_limit_reached: boolean;
	/**
	 * A boolean specifying whether the organization have enough unused Zulip licenses
	 * to invite specified number of users.
	 */
	license_limit_reached: boolean;
};

export type MissingArgumentError = CodedErrorBase & {
	result?: unknown;
	msg?: unknown;
	code?: unknown;
	/** It contains the information about the missing parameter. */
	var_name: string;
};

export type IncompatibleParametersError = CodedErrorBase & {
	result?: unknown;
	msg?: unknown;
	code?: unknown;
	/**
	 * A string containing the parameters, separated by commas,
	 * that are incompatible.
	 */
	parameters: string;
};

export type UserNotAuthorizedError = CodedError;

export type UserDeactivatedError = CodedError;

export type RateLimitedError = CodedErrorBase & {
	result?: unknown;
	msg?: unknown;
	code?: unknown;
	/**
	 * How many seconds the client must wait before making
	 * additional requests.
	 */
	"retry-after": number;
};

export type RealmDeactivatedError = CodedError;

export type InvalidPushDeviceTokenError = CodedError;

export type InvalidRemotePushDeviceTokenError = CodedError;

export type NoActivePushDeviceError = CodedError;

export type FailedToConnectBouncerError = CodedError;

export type InternalBouncerServerError = CodedError;

export type PushNotificationAdminActionRequiredError = CodedError;

/**
 * A JSON-encoded array indicating which types of events you're interested
 * in. Values that you might find useful include:
 */
export type Event_types = string[];

/**
 * A JSON-encoded array of arrays of length 2 indicating the
 * [narrow filter(s)](https://zulip.com/api/construct-narrow) for which you'd
 * like to receive events for.
 */
export type Narrow = string[][];

/**
 * Whether you would like to request message events from all public
 * channels. Useful for workflow bots that you'd like to see all new messages
 * sent to public channels. (You can also subscribe the user to private channels).
 */
export type AllPublicChannels = boolean;

/** The content of the message. */
export type RequiredContent = string;

/** The updated content of the target message. */
export type OptionalContent = string;

/**
 * Whether the channel's message history should be available to
 * newly subscribed members, or users can only access messages
 * they actually received while subscribed to the channel.
 */
export type HistoryPublicToSubscribers = boolean;

/**
 * A list of user IDs (preferred) or Zulip API email
 * addresses of the users to be subscribed to or unsubscribed
 * from the channels specified in the `subscriptions` parameter. If
 * not provided, then the requesting user/bot is subscribed.
 */
export type Principals = string[] | number[];

/**
 * A string indicating the type of emoji. Each emoji `reaction_type`
 * has an independent namespace for values of `emoji_code`.
 */
export type ReactionType = string;

/**
 * A unique identifier, defining the specific emoji codepoint requested,
 * within the namespace of the `reaction_type`.
 */
export type EmojiCode = string;

/**
 * Number of days that messages sent to this channel will be stored
 * before being automatically deleted by the [message retention
 * policy](https://zulip.com/help/message-retention-policy). Two special string format
 * values are supported:
 *
 * New in Zulip 3.0 (feature level 17).
 */
export type MessageRetentionDays = string | number;

/**
 * Whether [named topics](https://zulip.com/help/introduction-to-topics) and the empty
 * topic (i.e., ["general chat" topic](https://zulip.com/help/general-chat-topic))
 * are enabled in this channel.
 *
 * New in Zulip 11.0 (feature level 392).
 */
export type TopicsPolicy = "inherit" | "allow_empty_topic" | "disable_empty_topic" | "empty_topic_only";

/**
 * Whether any other users newly subscribed via this request should be
 * sent a direct message, from Notification Bot, notifying them about their
 * new subscription.
 */
export type SendNewSubscriptionMessages = boolean;

export type ChannelCanAddSubscribersGroup = GroupSettingValue;

export type CanRemoveSubscribersGroup = GroupSettingValue;

export type CanAdministerChannelGroup = GroupSettingValue;

export type CanDeleteAnyMessageGroup = GroupSettingValue;

export type CanDeleteOwnMessageGroup = GroupSettingValue;

export type CanMoveMessagesOutOfChannelGroup = GroupSettingValue;

export type CanMoveMessagesWithinChannelGroup = GroupSettingValue;

export type CanSendMessageGroup = GroupSettingValue;

export type CanSubscribeGroup = GroupSettingValue;

export type CanResolveTopicsGroup = GroupSettingValue;

export type CanCreateTopicGroup = GroupSettingValue;

/**
 * The [Python regular
 * expression](https://docs.python.org/3/howto/regex.html) that should
 * trigger the linkifier.
 */
export type LinkifierPattern = string;

/**
 * The [RFC 6570](https://www.rfc-editor.org/rfc/rfc6570.html)
 * compliant URL template used for the link.
 * If you used named groups in `pattern`, you can insert their
 * content here with `{name_of_group}`.
 *
 * New in Zulip 7.0 (feature level 176).
 */
export type LinkifierURLTemplate = string;

/**
 * The ID of the folder to which the channel belongs.
 *
 * New in Zulip 11.0 (feature level 389).
 */
export type FolderId = number | null;

/** One of the channel properties described below: */
export type SubscriptionProperty = "color" | "is_muted" | "in_home_view" | "pin_to_top" | "desktop_notifications" | "audible_notifications" | "push_notifications" | "email_notifications" | "wildcard_mentions_notify";

/** The new value of the property being modified. */
export type SubscriptionPropertyValue = boolean | string;

/**
 * Event sent to a user's clients when that user's set of configured
 * [alert words](https://zulip.com/help/dm-mention-alert-notifications#alert-words) have changed.
 */
export interface AlertWordsEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "alert_words";
	/**
	 * An array of strings, where each string is an alert word (or phrase)
	 * configured by the user.
	 */
	alert_words: string[];
}

/**
 * Event sent to a user's clients when that user's settings have changed.
 *
 * New in Zulip 5.0 (feature level 89).
 */
export interface UserSettingsUpdateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "user_settings";
	op: "update";
	/** Name of the changed setting. */
	property: string;
	/** New value of the changed setting. */
	value: boolean | number | string;
	/**
	 * Present only if the setting to be changed is
	 * `default_language`. Contains the name of the
	 * new default language in English.
	 */
	language_name?: string;
}

/**
 * Event sent generally to all users who can access the modified
 * user for changes in the set of users or those users metadata.
 */
export interface RealmUserUpdateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_user";
	op: "update";
	/**
	 * Object containing the changed details of the user.
	 * It has multiple forms depending on the value changed.
	 */
	person: {
		/** The ID of modified user. */
		user_id: number;
		/** The new full name for the user. */
		full_name: string;
	} | {
		/** The ID of the user who is affected by this change. */
		user_id: number;
		/** The URL of the new avatar for the user. */
		avatar_url: string;
		/** The new avatar data source type for the user. Valid values are: */
		avatar_source: string;
		/** The new medium-size avatar URL for user. */
		avatar_url_medium: string;
		/**
		 * The version number for the user's avatar. This is useful
		 * for cache-busting.
		 */
		avatar_version: number;
	} | {
		/** The ID of modified user. */
		user_id: number;
		/**
		 * The Zulip API email of the user.
		 * @deprecated
		 */
		email: string;
		/** The IANA identifier of the new profile time zone for the user. */
		timezone: string;
	} | {
		/** The ID of the user/bot whose owner has changed. */
		user_id: number;
		/** The user ID of the new bot owner. */
		bot_owner_id: number;
	} | {
		/** The ID of the user affected by this change. */
		user_id: number;
		/** The new [role](https://zulip.com/api/roles-and-permissions) of the user. */
		role: 100 | 200 | 300 | 400 | 600;
	} | {
		/** The ID of the user affected by this change. */
		user_id: number;
		/** The new delivery email of the user. */
		delivery_email?: string | null;
	} | {
		/** The ID of the user affected by this change. */
		user_id: number;
		/**
		 * Object containing details about the custom
		 * profile data change.
		 */
		custom_profile_field: {
			/** The ID of the custom profile field which user updated. */
			id: number;
			/**
			 * User's personal value for this custom profile field,
			 * or `null` if unset.
			 */
			value: string | null;
			/**
			 * The `value` rendered in HTML. Will only be present for
			 * custom profile field types that support Markdown rendering.
			 */
			rendered_value?: string;
		};
	} | {
		/** The ID of the user affected by this change. */
		user_id: number;
		/**
		 * The new value of `email` for the user. The client
		 * should update any data structures associated
		 * with this user to use this new value as the
		 * user's Zulip API email address.
		 */
		new_email: string;
	} | {
		/** The ID of the user affected by this change. */
		user_id: number;
		/** A boolean describing whether the user account has been deactivated. */
		is_active: boolean;
	} | {
		/** The ID of the user affected by this change. */
		user_id: number;
		/** This value is always `false`. */
		is_imported_stub: boolean;
	} | {
		/** The ID of the user affected by this change. */
		user_id: number;
		/**
		 * The time when the user logged in to their account
		 * for the first time.
		 */
		date_joined: string;
	};
}

/**
 * Event sent to a user's clients when that user's channel subscriptions
 * have changed (either the set of subscriptions or their properties).
 */
export interface SubscriptionAddEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "subscription";
	op: "add";
	/**
	 * A list of dictionaries where each dictionary contains
	 * information about one of the subscribed channels.
	 */
	subscriptions: Subscription[];
}

/**
 * Event sent to a user's clients when that user has been unsubscribed
 * from one or more channels.
 */
export interface SubscriptionRemoveEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "subscription";
	op: "remove";
	/**
	 * A list of dictionaries, where each dictionary contains
	 * information about one of the newly unsubscribed channels.
	 */
	subscriptions: {
		/** The ID of the channel. */
		stream_id: number;
		/** The name of the channel. */
		name: string;
	}[];
}

/**
 * Event sent to a user's clients when a property of the user's
 * subscription to a channel has been updated. This event is used
 * only for personal properties like `is_muted` or `pin_to_top`.
 * See the [`stream op: update` event](https://zulip.com/api/get-events#stream-update)
 * for updates to global properties of a channel.
 */
export interface SubscriptionUpdateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "subscription";
	op: "update";
	/** The ID of the channel whose subscription details have changed. */
	stream_id: number;
	/**
	 * The property of the subscription which has changed. For details on the
	 * various subscription properties that a user can change, see
	 * [POST /users/me/subscriptions/properties](https://zulip.com/api/update-subscription-settings).
	 */
	property?: string;
	/** The new value of the changed property. */
	value: number | boolean | string;
}

/**
 * Event sent when another user subscribes to a channel, or their
 * subscription is newly visible to the current user.
 */
export interface SubscriptionPeerAddEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "subscription";
	op: "peer_add";
	/**
	 * The IDs of channels that have new or updated subscriber data.
	 *
	 * New in Zulip 4.0 (feature level 35).
	 */
	stream_ids: number[];
	/**
	 * The IDs of the users who are newly visible as subscribed to
	 * the specified channels.
	 *
	 * New in Zulip 4.0 (feature level 35).
	 */
	user_ids: number[];
}

/**
 * Event sent to other users when users have been unsubscribed
 * from channels. Sent to all users if the channel is public or to only
 * the existing subscribers if the channel is private.
 */
export interface SubscriptionPeerRemoveEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "subscription";
	op: "peer_remove";
	/**
	 * The IDs of the channels from which the users have been
	 * unsubscribed from.
	 *
	 * New in Zulip 4.0 (feature level 35).
	 */
	stream_ids: number[];
	/**
	 * The IDs of the users who have been unsubscribed.
	 *
	 * New in Zulip 4.0 (feature level 35).
	 */
	user_ids: number[];
}

/** Event type for messages. */
export interface MessageEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "message";
	message: MessagesEvent;
	/** The user's [message flags][message-flags] for the message. */
	flags: string[];
	/**
	 * For clients supporting
	 * [local echo](https://zulip.readthedocs.io/en/latest/subsystems/sending-messages.html#local-echo).
	 * Only present if [`local_id`](https://zulip.com/api/send-message#parameter-local_id) and
	 * [`queue_id`](https://zulip.com/api/send-message#parameter-queue_id) were passed by the
	 * client when the message was sent to the server.
	 */
	local_message_id?: string;
}

/**
 * Event sent to a user's clients when the user completes the OAuth flow
 * for the [Zoom integration](https://zulip.com/help/configure-call-provider). Clients need
 * to know whether initiating Zoom OAuth is required before creating a Zoom
 * call.
 */
export interface HasZoomTokenEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "has_zoom_token";
	/**
	 * A boolean specifying whether the user has zoom
	 * token or not.
	 */
	value: boolean;
}

/**
 * Event sent to a user's clients when the user completes the OAuth flow for
 * the [Webex integration](https://zulip.com/help/configure-call-provider). Clients need to
 * know whether initiating Webex OAuth flow is required before creating a
 * Webex call.
 */
export interface HasWebexTokenEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "has_webex_token";
	/** A boolean specifying whether the user has a Webex access token. */
	value: boolean;
}

/**
 * A simple event sent when the set of invitations changes.
 * This event is sent to organization administrators and the creator of
 * the changed invitation; this tells clients they need to refetch
 * data from `GET /invites` if they are displaying UI containing active
 * invitations.
 */
export interface InvitesChangedEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "invites_changed";
}

/**
 * Event sent to all users in a Zulip organization when a new
 * user joins or when a guest user gains access to a user.
 * Processing this event is important to being able to display
 * basic details on other users given only their ID.
 */
export interface RealmUserAddEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_user";
	op: "add";
	person: User;
}

/** Event sent to guest users when they lose access to a user. */
export interface RealmUserRemoveEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_user";
	op: "remove";
	/** Object containing details of the deactivated user. */
	person: {
		/** The ID of the deactivated user. */
		user_id: number;
		/**
		 * The full name of the user.
		 * @deprecated
		 */
		full_name: string;
	};
}

/**
 * Event sent to all users in an organization when a user comes back
 * online after being offline for a while.
 */
export interface PresenceEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "presence";
	/**
	 * Only present for clients that support the `simplified_presence_events`
	 * [client capability](https://zulip.com/api/register-queue#parameter-client_capabilities).
	 *
	 * New in Zulip 11.0 (feature level 419).
	 */
	presences?: Record<string, ModernPresenceFormat>;
	/**
	 * Not present for clients that support the `simplified_presence_events`
	 * [client capability](https://zulip.com/api/register-queue#parameter-client_capabilities).
	 */
	user_id?: number;
	/**
	 * Not present for clients that support the `simplified_presence_events`
	 * [client capability](https://zulip.com/api/register-queue#parameter-client_capabilities).
	 * @deprecated
	 */
	email?: string;
	/**
	 * Not present for clients that support the `simplified_presence_events`
	 * [client capability](https://zulip.com/api/register-queue#parameter-client_capabilities).
	 */
	server_timestamp?: number;
	/**
	 * Not present for clients that support the `simplified_presence_events`
	 * [client capability](https://zulip.com/api/register-queue#parameter-client_capabilities).
	 */
	presence?: Record<string, {
			/** The client's platform name. */
			client: string;
			/**
			 * The status of the user on this client. Will be either `idle`
			 * or `active`.
			 */
			status: "idle" | "active";
			/**
			 * The UNIX timestamp of when this client sent the user's presence
			 * to the server with the precision of a second.
			 */
			timestamp: number;
			/**
			 * Whether the client is capable of showing mobile/push notifications
			 * to the user.
			 */
			pushable: boolean;
		}>;
}

/**
 * Event sent when a new channel is created to users who can see
 * the new channel exists (for private channels, only subscribers and
 * organization administrators will receive this event).
 */
export interface StreamCreateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "stream";
	op: "create";
	/**
	 * Array of objects, each containing
	 * details about the newly added channel(s).
	 */
	streams: BasicChannel[];
}

/**
 * Event sent when a user loses access to a channel they previously
 * [could access](https://zulip.com/help/channel-permissions) because they are
 * unsubscribed from a private channel or their [role](https://zulip.com/help/user-roles)
 * has changed.
 */
export interface StreamDeleteEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "stream";
	op: "delete";
	/**
	 * Array of objects, each containing ID of the channel that was deleted.
	 * @deprecated
	 */
	streams: {
		/** ID of the deleted channel. */
		stream_id: number;
	}[];
	/**
	 * Array containing the IDs of the channels that were deleted.
	 *
	 * New in Zulip 10.0 (feature level 343).
	 */
	stream_ids: number[];
}

/**
 * Event sent to all users who can see that a channel exists
 * when a property of that channel changes. See
 * [GET /streams](https://zulip.com/api/get-streams#response) response
 * for details on the various properties of a channel.
 */
export interface StreamUpdateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "stream";
	op: "update";
	/** The ID of the channel whose details have changed. */
	stream_id: number;
	/** The name of the channel whose details have changed. */
	name: string;
	/**
	 * The property of the channel which has changed. See
	 * [GET /streams](https://zulip.com/api/get-streams#response) response for details
	 * on the various properties of a channel.
	 */
	property: string;
	/** The new value of the changed property. */
	value: {
		/** The list of IDs of individual users in the collection of users with this permission. */
		direct_members: number[];
		/** The list of IDs of the groups in the collection of users with this permission. */
		direct_subgroups: number[];
	} | number | boolean | string | null;
	/** Note: Only present if the changed property was `description`. */
	rendered_description?: string;
	/** Note: Only present if the changed property was `invite_only`. */
	history_public_to_subscribers?: boolean;
	/**
	 * Note: Only present if the changed property was `invite_only`.
	 *
	 * New in Zulip 5.0 (feature level 71).
	 */
	is_web_public?: boolean;
}

/**
 * Event sent when a reaction is added to a message.
 * Sent to all users who were recipients of the message.
 */
export type ReactionAddEvent = EmojiReactionEvent & {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "reaction";
	op: "add";
	/**
	 * The ID of the message to which a reaction was
	 * added.
	 */
	message_id: number;
	emoji_code?: unknown;
	emoji_name?: unknown;
	reaction_type?: unknown;
	user_id?: unknown;
};

/**
 * Event sent when a reaction is removed from a message.
 * Sent to all users who were recipients of the message.
 */
export type ReactionRemoveEvent = EmojiReactionEvent & {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "reaction";
	op: "remove";
	/**
	 * The ID of the message from which the reaction was
	 * removed.
	 */
	message_id: number;
	emoji_code?: unknown;
	emoji_name?: unknown;
	reaction_type?: unknown;
	user_id?: unknown;
};

/**
 * Event sent to a user's clients when the user uploads a new file
 * in a Zulip message. Useful to implement live update in UI showing all files
 * the current user has uploaded.
 */
export interface AttachmentAddEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "attachment";
	op: "add";
	/** Dictionary containing details of a file uploaded by a user. */
	attachment: Attachment;
	/**
	 * The total size of all files uploaded by in the organization,
	 * in bytes.
	 */
	upload_space_used: number;
}

/**
 * Event sent to a user's clients when details of a file that user
 * uploaded are changed. Most updates will be changes in the list of
 * messages that reference the uploaded file.
 */
export interface AttachmentUpdateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "attachment";
	op: "update";
	/** Dictionary containing details of a file uploaded by a user. */
	attachment: Attachment;
	/**
	 * The total size of all files uploaded by in the organization,
	 * in bytes.
	 */
	upload_space_used: number;
}

/**
 * Event sent to a user's clients when the user deletes a file
 * they had uploaded. Useful primarily for UI showing all the files
 * the current user has uploaded.
 */
export interface AttachmentRemoveEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "attachment";
	op: "remove";
	/** Dictionary containing the ID of the deleted attachment. */
	attachment: {
		/** The ID of the deleted attachment. */
		id: number;
	};
	/**
	 * The total size of all files uploaded by in the organization,
	 * in bytes.
	 */
	upload_space_used: number;
}

/**
 * Event sent to a user's clients when they [register a device](https://zulip.com/api/register-client-device).
 *
 * New in Zulip 12.0 (feature level 468).
 */
export interface DeviceAddEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "device";
	op: "add";
	/** The ID of the new registered device. */
	device_id: number;
}

/**
 * Event sent to a user's clients when they deregister a device.
 *
 * New in Zulip 12.0 (feature level 468).
 */
export interface DeviceRemoveEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "device";
	op: "remove";
	/** The ID of the device which deregistered. */
	device_id: number;
}

/**
 * Event sent to a user's clients when the metadata in the
 * `devices` dictionary for the user changes.
 *
 * New in Zulip 12.0 (feature level 468).
 */
export interface DeviceUpdateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "device";
	op: "update";
	/** The ID of the registered device whose metadata changed. */
	device_id: number;
	/**
	 * ID to reference the encryption key used to encrypt
	 * push notifications sent to the device.
	 */
	push_key_id: number;
	/**
	 * ID to reference the token provided by FCM/APNs to the device,
	 * which is registered to the push bouncer service.
	 */
	push_token_id: string | null;
	/**
	 * ID to reference the token provided by FCM/APNs to the device,
	 * whose registration is in progress to the push bouncer service.
	 */
	pending_push_token_id: string | null;
	/**
	 * The UNIX timestamp for the last time when `pending_push_token_id`
	 * was set to a new non-null value, in UTC seconds.
	 */
	push_token_last_updated_timestamp: number;
	/**
	 * If the push registration failed, a [Zulip API error code](https://zulip.com/api/rest-error-handling)
	 * indicating the type of failure that occurred.
	 */
	push_registration_error_code: string | null;
}

/** Event sent when a submessage is added to a message. */
export interface SubmessageEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "submessage";
	/** The type of the message. */
	msg_type: string;
	/** The new content of the submessage. */
	content: string;
	/** The ID of the message to which the submessage has been added. */
	message_id: number;
	/** The ID of the user who sent the message. */
	sender_id: number;
	/** The ID of the submessage. */
	submessage_id: number;
}

/**
 * Event sent to all users who can access the modified
 * user when the status of a user changes.
 */
export interface UserStatusEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "user_status";
	/**
	 * Whether the user has marked themself "away" with this status.
	 * @deprecated
	 */
	away: boolean;
	/** The text content of the status message. */
	status_text: string;
	/**
	 * The [emoji name](https://zulip.com/api/update-status#parameter-emoji_name) for
	 * the emoji the user selected for their new status.
	 *
	 * New in Zulip 5.0 (feature level 86).
	 */
	emoji_name: string;
	/**
	 * The [emoji code](https://zulip.com/api/update-status#parameter-emoji_code) for
	 * the emoji the user selected for their new status.
	 *
	 * New in Zulip 5.0 (feature level 86).
	 */
	emoji_code: string;
	/**
	 * The [emoji type](https://zulip.com/api/update-status#parameter-reaction_type) for
	 * the emoji the user selected for their new status.
	 *
	 * New in Zulip 5.0 (feature level 86).
	 */
	reaction_type: "unicode_emoji" | "realm_emoji" | "zulip_extra_emoji";
	/** The ID of the user whose status changed. */
	user_id: number;
}

/**
 * Event sent to all users in a Zulip organization when new custom
 * profile field types are configured for that Zulip organization.
 */
export interface CustomProfileFieldsEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "custom_profile_fields";
	/**
	 * An array of dictionaries where each dictionary contains
	 * details of a single new custom profile field for the Zulip
	 * organization.
	 */
	fields: CustomProfileField[];
}

/**
 * Event sent to all users in a Zulip organization when an organization
 * administrator changes the organization's configured default channel groups.
 */
export interface DefaultStreamGroupsEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "default_stream_groups";
	/**
	 * An array of dictionaries where each dictionary
	 * contains details about a single default channel group.
	 */
	default_stream_groups: DefaultChannelGroup[];
}

/**
 * Event sent to all users in a Zulip organization when the
 * default channels in the organization are changed by an
 * organization administrator.
 */
export interface DefaultStreamsEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "default_streams";
	/**
	 * An array of IDs of all the [default channels](https://zulip.com/help/set-default-streams-for-new-users)
	 * in the organization.
	 */
	default_streams: number[];
}

/** Event sent when a message has been deleted. */
export interface DeleteMessageEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "delete_message";
	/**
	 * Only present for clients that support the `bulk_message_deletion`
	 * [client capability][client-capabilities].
	 */
	message_ids?: number[];
	/**
	 * Only present for clients that do not support the `bulk_message_deletion`
	 * [client capability][client-capabilities].
	 */
	message_id?: number;
	/** The type of message. Either `"stream"` or `"private"`. */
	message_type: "private" | "stream";
	/** Only present if `message_type` is `"stream"`. */
	stream_id?: number;
	/** Only present if `message_type` is `"stream"`. */
	topic?: string;
}

/**
 * Event sent to a user's clients when that user's set of
 * configured muted topics have changed.
 */
export interface MutedTopicsEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "muted_topics";
	/**
	 * Array of tuples, where each tuple describes a muted topic.
	 * The first element of the tuple is the channel name in which the topic
	 * has to be muted, the second element is the topic name to be muted
	 * and the third element is an integer UNIX timestamp representing
	 * when the topic was muted.
	 * @deprecated
	 */
	muted_topics: (string | number)[][];
}

/**
 * Event sent to a user's clients when the user mutes/unmutes
 * a topic, or otherwise modifies their personal per-topic
 * configuration.
 *
 * New in Zulip 6.0 (feature level 134).
 */
export interface UserTopicEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "user_topic";
	/** The ID of the channel to which the topic belongs. */
	stream_id: number;
	/** The name of the topic. */
	topic_name: string;
	/**
	 * An integer UNIX timestamp representing when the user-topic
	 * relationship was last changed.
	 */
	last_updated: number;
	/**
	 * An integer indicating the user's visibility
	 * preferences for the topic, such as whether the topic
	 * is muted.
	 */
	visibility_policy: number;
}

/**
 * Event sent to a user's clients when that user's set of
 * configured [muted users](https://zulip.com/api/mute-user) have changed.
 *
 * New in Zulip 4.0 (feature level 48).
 */
export interface MutedUsersEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "muted_users";
	/**
	 * A list of dictionaries where each dictionary describes
	 * a muted user.
	 */
	muted_users: {
		/** The ID of the muted user. */
		id: number;
		/** An integer UNIX timestamp representing when the user was muted. */
		timestamp: number;
	}[];
}

/**
 * Heartbeat events are sent by the server to avoid
 * longpolling connections being affected by networks that
 * kill idle HTTP connections.
 */
export interface HeartbeatEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "heartbeat";
}

/**
 * Event sent when the set of onboarding steps to show for the current user
 * has changed (e.g. because the user dismissed one).
 */
export interface OnboardingStepsEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "onboarding_steps";
	/**
	 * An array of dictionaries where each dictionary contains details about a
	 * single onboarding step.
	 */
	onboarding_steps: OnboardingStep[];
}

/**
 * Event sent when a message's content, topic and/or
 * channel has been edited or when a message's content
 * has a rendering update, such as for an
 * [inline URL preview][inline-url-previews].
 * Sent to all users who had received the original
 * message.
 */
export interface UpdateMessageEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "update_message";
	/** The ID of the user who sent the message. */
	user_id: number | null;
	/**
	 * Whether the event only updates the rendered content of the message.
	 *
	 * New in Zulip 5.0 (feature level 114).
	 */
	rendering_only: boolean;
	/** The ID of the message which was edited or updated. */
	message_id: number;
	/**
	 * A sorted list of IDs of messages to which any channel or topic
	 * changes encoded in this event should be applied.
	 */
	message_ids: number[];
	/**
	 * The user's personal [message flags][message-flags] for the
	 * message with ID `message_id` following the edit.
	 */
	flags: string[];
	/**
	 * The UNIX timestamp when this message edit operation was processed by
	 * the server, in UTC seconds.
	 */
	edit_timestamp: number;
	/** Only present if the message was edited and originally sent to a channel. */
	stream_name?: string;
	/** Only present if the message was edited and originally sent to a channel. */
	stream_id?: number;
	/** Only present if message(s) were moved to a different channel. */
	new_stream_id?: number;
	/**
	 * Only present if this event moved messages to a different
	 * topic and/or channel.
	 */
	propagate_mode?: "change_one" | "change_later" | "change_all";
	/**
	 * Only present if this event moved messages to a different
	 * topic and/or channel.
	 */
	orig_subject?: string;
	/**
	 * Only present if this event moved messages to a different topic;
	 * this field will not be present when moving messages to the same
	 * topic name in a different channel.
	 */
	subject?: string;
	/**
	 * Only present if this event moved messages to a different topic;
	 * this field will not be present when moving messages to the same
	 * topic name in a different channel.
	 *
	 * New in Zulip 3.0 (feature level 1).
	 */
	topic_links?: {
		/** The original link text present in the topic. */
		text: string;
		/** The expanded target url which the link points to. */
		url: string;
	}[];
	/** Only present if this event changed the message content. */
	orig_content?: string;
	/** Only present if this event changed the message content. */
	orig_rendered_content?: string;
	/**
	 * Only present if this event changed the message content or
	 * updated the message content for an
	 * [inline URL preview][inline-url-previews].
	 */
	content?: string;
	/**
	 * Only present if this event changed the message content or
	 * updated the message content for an
	 * [inline URL preview][inline-url-previews].
	 */
	rendered_content?: string;
	/** Only present if this event changed the message content. */
	is_me_message?: boolean;
}

/** Event sent when a user starts typing a message. */
export interface TypingStartEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "typing";
	op: "start";
	/**
	 * Type of message being composed. Must be `"stream"` or `"direct"`.
	 *
	 * New in Zulip 4.0 (feature level 58).
	 */
	message_type: "direct" | "stream";
	/** Object describing the user who is typing the message. */
	sender: {
		/** The user's ID. */
		user_id: number;
		/** The Zulip API email address for the user. */
		email: string;
	};
	/** Only present if `message_type` is `"direct"`. */
	recipients?: {
		/** The ID of the user. */
		user_id: number;
		/** The Zulip API email address for the user. */
		email: string;
	}[];
	/**
	 * Only present if `message_type` is `"stream"`.
	 *
	 * New in Zulip 4.0 (feature level 58).
	 */
	stream_id?: number;
	/**
	 * Only present if `message_type` is `"stream"`.
	 *
	 * New in Zulip 4.0 (feature level 58).
	 */
	topic?: string;
}

/** Event sent when a user stops typing a message. */
export interface TypingStopEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "typing";
	op: "stop";
	/**
	 * Type of message being composed. Must be `"stream"` or `"direct"`.
	 *
	 * New in Zulip 4.0 (feature level 58).
	 */
	message_type: "direct" | "stream";
	/** Object describing the user who was previously typing the message. */
	sender: {
		/** The user's ID. */
		user_id: number;
		/** The Zulip API email address for the user. */
		email: string;
	};
	/** Only present if `message_type` is `"direct"`. */
	recipients?: {
		/** The ID of the user. */
		user_id: number;
		/** The Zulip API email address for the user. */
		email: string;
	}[];
	/**
	 * Only present if `message_type` is `"stream"`.
	 *
	 * New in Zulip 4.0 (feature level 58).
	 */
	stream_id?: number;
	/**
	 * Only present if `message_type` is `"stream"`.
	 *
	 * New in Zulip 4.0 (feature level 58).
	 */
	topic?: string;
}

/**
 * Event sent when a user starts editing a message.
 * Event sent when a user starts typing in a textarea to edit the
 * content of a message. See the [edit message typing notifications
 * endpoint](https://zulip.com/api/set-typing-status-for-message-edit).
 *
 * New in Zulip 10.0 (feature level 351).
 */
export interface TypingEditMessageStartEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "typing_edit_message";
	op: "start";
	/**
	 * The ID of the user who is typing the edit of the
	 * message.
	 */
	sender_id: number;
	/** Indicates the message id of the message that is being edited. */
	message_id: number;
	/** Object containing details about recipients of message edit typing notification. */
	recipient: {
		/** Type of message being composed. Must be `"channel"` or `"direct"`. */
		type: "direct" | "channel";
		/** Only present if `type` is `"channel"`. */
		channel_id?: number;
		/** Only present if `type` is `"channel"`. */
		topic?: string;
		/** Present only if `type` is `direct`. */
		user_ids?: number[];
	};
}

/**
 * Event sent when a user stops typing in a textarea to edit the
 * content of a message. See the [edit message typing notifications
 * endpoint](https://zulip.com/api/set-typing-status-for-message-edit).
 *
 * New in Zulip 10.0 (feature level 351).
 */
export interface TypingEditMessageStopEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "typing_edit_message";
	op: "stop";
	/** The ID of the user who sent the message. */
	sender_id: number;
	/** Indicates the message id of the message that is being edited. */
	message_id: number;
	/** Object containing details about recipients of message edit typing notification. */
	recipient: {
		/** Type of message being composed. Must be `"channel"` or `"direct"`. */
		type: "direct" | "channel";
		/** Only present if `type` is `"channel"`. */
		channel_id?: number;
		/** Only present if `type` is `"channel"`. */
		topic?: string;
		/** Present only if `type` is `direct`. */
		user_ids?: number[];
	};
}

/**
 * Event sent to a user when [message flags][message-flags] are added
 * to messages.
 */
export interface UpdateMessageFlagsAddEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "update_message_flags";
	op: "add";
	/**
	 * Old name for the `op` field in this event type.
	 * @deprecated
	 */
	operation: "add";
	/** The [flag][message-flags] that was added. */
	flag: string;
	/**
	 * Array containing the IDs of all messages to which
	 * the flag was added.
	 */
	messages: number[];
	/**
	 * Whether the specified flag was added to all messages.
	 * This field is only relevant for the `"read"` flag, and
	 * will be `false` for all other flags.
	 */
	all: boolean;
}

/**
 * Event sent to a user when [message flags][message-flags] are
 * removed from messages.
 */
export interface UpdateMessageFlagsRemoveEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "update_message_flags";
	op: "remove";
	/**
	 * Old name for the `op` field in this event type.
	 * @deprecated
	 */
	operation: "remove";
	/** The [flag][message-flags] to be removed. */
	flag: string;
	/**
	 * Array containing the IDs of the messages from which the flag
	 * was removed.
	 */
	messages: number[];
	/**
	 * Will be `false` for all specified flags.
	 * @deprecated
	 */
	all: boolean;
	/**
	 * Only present if the specified `flag` is `"read"`.
	 *
	 * New in Zulip 5.0 (feature level 121).
	 */
	message_details?: Record<string, {
			/** The type of this message. Either `"stream"` or `"private"`. */
			type: "private" | "stream";
			/**
			 * A flag which indicates whether the message contains a mention
			 * of the user.
			 */
			mentioned?: boolean;
			/** Present only if `type` is `private`. */
			user_ids?: number[];
			/** Present only if `type` is `"stream"`. */
			stream_id?: number;
			/** Present only if `type` is `"stream"`. */
			topic?: string;
			/**
			 * **Deprecated** internal implementation detail. Clients should
			 * ignore this field as it will be removed in the future.
			 * @deprecated
			 */
			unmuted_stream_msg?: boolean;
		}>;
}

/** Event sent to users in an organization when a [user group](https://zulip.com/help/user-groups) is created. */
export interface UserGroupAddEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "user_group";
	op: "add";
	/** Object containing the user group's attributes. */
	group: UserGroup;
}

/**
 * Event sent to all users in a Zulip organization
 * when a property of a user group is changed.
 */
export interface UserGroupUpdateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "user_group";
	op: "update";
	/** The ID of the user group whose details have changed. */
	group_id: number;
	/** Dictionary containing the changed details of the user group. */
	data: {
		/** The new name of the user group. Only present if the group's name changed. */
		name?: string;
		/**
		 * The new description of the group. Only present if the description
		 * changed.
		 */
		description?: string;
		can_add_members_group: GroupSettingValue;
		can_join_group: GroupSettingValue;
		can_leave_group: GroupSettingValue;
		can_manage_group: GroupSettingValue;
		can_mention_group: GroupSettingValue;
		can_remove_members_group: GroupSettingValue;
		/**
		 * Whether the user group is deactivated. Deactivated groups
		 * cannot be used as a subgroup of another group or used for
		 * any other purpose.
		 *
		 * New in Zulip 10.0 (feature level 290).
		 */
		deactivated: boolean;
	};
}

/** Event sent to all users when users have been added to a user group. */
export interface UserGroupAddMembersEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "user_group";
	op: "add_members";
	/** The ID of the user group with new members. */
	group_id: number;
	/**
	 * Array containing the IDs of the users who have been added
	 * to the user group.
	 */
	user_ids: number[];
}

/**
 * Event sent to all users when users have been removed from
 * a user group.
 */
export interface UserGroupRemoveMembersEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "user_group";
	op: "remove_members";
	/** The ID of the user group whose details have changed. */
	group_id: number;
	/**
	 * Array containing the IDs of the users who have been removed
	 * from the user group.
	 */
	user_ids: number[];
}

/**
 * Event sent to all users when subgroups have been added to
 * a user group.
 *
 * New in Zulip 6.0 (feature level 127).
 */
export interface UserGroupAddSubgroupsEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "user_group";
	op: "add_subgroups";
	/** The ID of the user group whose details have changed. */
	group_id: number;
	/**
	 * Array containing the IDs of the subgroups that have been added
	 * to the user group.
	 *
	 * New in Zulip 6.0 (feature level 131).
	 */
	direct_subgroup_ids: number[];
}

/**
 * Event sent to all users when subgroups have been removed from
 * a user group.
 *
 * New in Zulip 6.0 (feature level 127).
 */
export interface UserGroupRemoveSubgroupsEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "user_group";
	op: "remove_subgroups";
	/** The ID of the user group whose details have changed. */
	group_id: number;
	/**
	 * Array containing the IDs of the subgroups that have been
	 * removed from the user group.
	 *
	 * New in Zulip 6.0 (feature level 131).
	 */
	direct_subgroup_ids: number[];
}

/**
 * Event sent when a user group is deactivated but only to clients
 * with `include_deactivated_groups` client capability set to `false`.
 */
export interface UserGroupRemoveEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "user_group";
	op: "remove";
	/** The ID of the group which has been deleted. */
	group_id: number;
}

/**
 * Event sent to all users in a Zulip organization when the
 * set of configured [linkifiers](https://zulip.com/help/add-a-custom-linkifier)
 * for the organization has changed.
 *
 * New in Zulip 4.0 (feature level 54).
 */
export interface RealmLinkifiersEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_linkifiers";
	/**
	 * An ordered array of dictionaries where each dictionary contains
	 * details about a single linkifier.
	 */
	realm_linkifiers: {
		/**
		 * The [Python regular expression](https://docs.python.org/3/howto/regex.html)
		 * that represents the pattern that should be linkified by this linkifier.
		 */
		pattern: string;
		/**
		 * The [RFC 6570](https://www.rfc-editor.org/rfc/rfc6570.html) compliant
		 * URL template to be used for linkifying matches.
		 *
		 * New in Zulip 7.0 (feature level 176).
		 */
		url_template: string;
		/** The ID of the linkifier. */
		id: number;
		/**
		 * An example input string that matches the linkifier's pattern.
		 * This is required for reverse linkifiers.
		 *
		 * New in Zulip 12.0 (feature level 471).
		 */
		example_input: string | null;
		/**
		 * A simple template using `{variable}` for variables that can
		 * be used to generate the Markdown linkifier syntax, given a
		 * URL matching the URL template.
		 *
		 * New in Zulip 12.0 (feature level 471).
		 */
		reverse_template: string | null;
		/**
		 * An array of additional [RFC 6570][rfc6570] compliant URL
		 * template strings that are used for reverse linkification
		 * (converting pasted URLs to linkifier pattern text). These
		 * templates have no effect on forward linkification.
		 */
		alternative_url_templates: string[];
	}[];
}

/**
 * Legacy event type that is no longer sent to clients. Previously, sent
 * to all users in a Zulip organization when the set of configured
 * [linkifiers](https://zulip.com/help/add-a-custom-linkifier) for the organization was
 * changed.
 */
export interface RealmFiltersEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_filters";
	/**
	 * An array of tuples, where each tuple described a linkifier. The first
	 * element of the tuple was a string regex pattern which represented the
	 * pattern to be linkified on matching, for example `"#(?P<id>[123])"`.
	 * The second element was the URL format string that the pattern should be
	 * linkified with. A URL format string for the above example would be
	 * `"https://realm.com/my_realm_filter/%(id)s"`. And the third element
	 * was the ID of the realm filter.
	 */
	realm_filters: (number | string)[][];
}

/**
 * Event sent to all users in a Zulip organization when the
 * set of configured [code playgrounds](https://zulip.com/help/code-blocks#code-playgrounds)
 * for the organization has changed.
 *
 * New in Zulip 4.0 (feature level 49).
 */
export interface RealmPlaygroundsEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_playgrounds";
	/**
	 * An array of dictionaries where each dictionary contains
	 * data about a single playground entry.
	 */
	realm_playgrounds: RealmPlayground[];
}

/**
 * Event sent to all users in a Zulip organization when
 * a [custom emoji](https://zulip.com/help/custom-emoji) has been added.
 *
 * New in Zulip 12.0 (feature level 491).
 */
export interface RealmEmojiAddEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_emoji";
	op: "add";
	/**
	 * Object containing details about an emoji. It has the
	 * following properties:
	 */
	emoji: RealmEmoji;
}

/**
 * Event sent to all users in a Zulip organization when
 * a property of a [custom emoji](https://zulip.com/help/custom-emoji) has
 * been changed. Only the fields being updated are included
 * in the event.
 *
 * New in Zulip 12.0 (feature level 491).
 */
export interface RealmEmojiUpdateOneEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_emoji";
	op: "update_one";
	/** The ID of the custom emoji being updated. */
	emoji_id: string;
	/** And object containing the properties that have changed. */
	data: {
		/** Whether the custom emoji has been deactivated. */
		deactivated: boolean;
	};
}

/**
 * Event sent to all users in a Zulip organization when
 * a [custom emoji](https://zulip.com/help/custom-emoji) has been updated,
 * typically when a new emoji has been added or an old one
 * has been deactivated. The event contains all custom emoji
 * configured for the organization, not just the updated
 * custom emoji.
 */
export interface RealmEmojiUpdateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_emoji";
	op: "update";
	/**
	 * An object in which keys are RealmEmoji ids, and the
	 * values describe the custom emoji for that id.
	 */
	realm_emoji: Record<string, RealmEmoji>;
}

/**
 * Event sent to all users in a Zulip organization when a new domain has been
 * added to the set of [allowed domains for account creation and email
 * changes](https://zulip.com/help/restrict-account-creation#configuring-email-domain-restrictions).
 */
export interface RealmDomainsAddEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_domains";
	op: "add";
	realm_domain: RealmDomain;
}

/**
 * Event sent to all users in a Zulip organization when the set of
 * [allowed domains for account creation and email
 * changes](https://zulip.com/help/restrict-account-creation#configuring-email-domain-restrictions)
 * has changed.
 */
export interface RealmDomainsChangeEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_domains";
	op: "change";
	realm_domain: RealmDomain;
}

/**
 * Event sent to all users in a Zulip organization when a domain has been
 * removed from the set of [allowed domains for account creation and email
 * changes](https://zulip.com/help/restrict-account-creation#configuring-email-domain-restrictions).
 */
export interface RealmDomainsRemoveEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_domains";
	op: "remove";
	/** The domain to be removed. */
	domain: string;
}

/**
 * Event sent to the user who requested a
 * [data export](https://zulip.com/help/export-your-organization)
 * when the status of the data export changes.
 */
export interface RealmExportEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_export";
	/**
	 * An array of dictionaries where each dictionary contains
	 * details about a data export of the organization.
	 */
	exports?: RealmExport[];
}

/**
 * Event sent to administrators when the [data export
 * consent][help-export-consent] status for a user changes, whether due
 * to a user changing their consent preferences or a user being created
 * or reactivated (since user creation/activation events do not contain
 * these data).
 *
 * New in Zulip 10.0 (feature level 312).
 */
export interface RealmExportConsentEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_export_consent";
	/** The ID of the user whose setting was changed. */
	user_id: number;
	/** Whether the user has consented for their private data export. */
	consented: boolean;
}

/**
 * Event sent to users who can administer a newly created bot
 * user. Clients will also receive a `realm_user` event that
 * contains basic details (but not the API key).
 */
export interface RealmBotAddEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_bot";
	op: "add";
	bot: Bot;
}

/**
 * Event sent to users who can administer a bot user when the bot is
 * configured. Clients may also receive a `realm_user` event that
 * for changes in public data about the bot (name, etc.).
 */
export interface RealmBotUpdateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_bot";
	op: "update";
	bot: BasicBot;
}

/** Event sent to all users when a bot has been deactivated. */
export interface RealmBotRemoveEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_bot";
	op: "remove";
	/** Object containing details about the deactivated bot. */
	bot: {
		/** The user ID of the deactivated bot. */
		user_id: number;
		/** The full name of the deactivated bot. */
		full_name: string;
	};
}

/**
 * Event sent to all users when a bot has been deactivated.
 * Note that this is very similar to the bot_remove event
 * and one of them will be removed soon.
 */
export interface RealmBotDeleteEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_bot";
	op: "delete";
	/** Object containing details about the deactivated bot. */
	bot: {
		/** The user ID of the deactivated bot. */
		user_id: number;
	};
}

/**
 * The simpler of two possible event types sent to all users
 * in a Zulip organization when the configuration of the
 * organization (realm) has changed.
 */
export interface RealmUpdateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm";
	op: "update";
	/** The name of the property that was changed. */
	property: string;
	/** The new value of the property. */
	value: string | boolean | number | null;
}

/**
 * Event sent to all users in a Zulip organization when the
 * organization (realm) is deactivated. Its main purpose is to
 * flush active longpolling connections so clients can immediately
 * show the organization as deactivated.
 */
export interface RealmDeactivatedEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm";
	op: "deactivated";
	/** The ID of the deactivated realm. */
	realm_id: number;
}

/** Event sent to all the users whenever the Zulip server restarts. */
export interface RestartEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "restart";
	/**
	 * The Zulip version number, in the format where this appears
	 * in the [server_settings](https://zulip.com/api/get-server-settings) and
	 * [register](https://zulip.com/api/register-queue) responses.
	 *
	 * New in Zulip 4.0 (feature level 59).
	 */
	zulip_version: string;
	/**
	 * The Zulip merge base number, in the format where this appears
	 * in the [server_settings](https://zulip.com/api/get-server-settings) and
	 * [register](https://zulip.com/api/register-queue) responses.
	 *
	 * New in Zulip 5.0 (feature level 88).
	 */
	zulip_merge_base: string;
	/**
	 * The [Zulip feature level](https://zulip.com/api/changelog) of the server
	 * after the restart.
	 *
	 * New in Zulip 4.0 (feature level 59).
	 */
	zulip_feature_level: number;
	/** The timestamp at which the server started. */
	server_generation: number;
}

/**
 * An event which signals the official Zulip web/desktop app to update,
 * by reloading the page and fetching a new queue; this will generally
 * follow a `restart` event. Clients which do not obtain their code
 * from the server (e.g. mobile and terminal clients, which store their
 * code locally) should ignore this event.
 *
 * New in Zulip 9.0 (feature level 240).
 */
export interface WebReloadClientEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "web_reload_client";
	/**
	 * Whether the client should fetch a new event queue immediately,
	 * rather than using a backoff strategy to avoid thundering herds.
	 * A Zulip development server uses this parameter to reload
	 * clients immediately.
	 */
	immediate: boolean;
}

/**
 * The more general of two event types that may be used when
 * sending an event to all users in a Zulip organization when
 * the configuration of the organization (realm) has changed.
 */
export interface RealmUpdateDictEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm";
	op: "update_dict";
	/**
	 * Always `"default"`. Present for backwards-compatibility with older
	 * clients that predate the `update_dict` event style.
	 * @deprecated
	 */
	property: string;
	/** An object containing the properties that have changed. */
	data: {
		/**
		 * Whether this organization's [message edit policy][config-message-editing]
		 * allows editing the content of messages.
		 */
		allow_message_editing: boolean;
		/**
		 * Dictionary of authentication method keys mapped to dictionaries that
		 * describe the properties of the named authentication method for the
		 * organization - its enabled status and availability for use by the
		 * organization.
		 */
		authentication_methods: Record<string, RealmAuthenticationMethod>;
		can_access_all_users_group: GroupSettingValue;
		can_create_groups: GroupSettingValue;
		can_create_bots_group: GroupSettingValue;
		can_create_write_only_bots_group: GroupSettingValue;
		can_create_public_channel_group: GroupSettingValue;
		can_create_private_channel_group: GroupSettingValue;
		can_create_web_public_channel_group: GroupSettingValue;
		can_add_custom_emoji_group: GroupSettingValue;
		can_add_subscribers_group: GroupSettingValue;
		can_delete_any_message_group: GroupSettingValue;
		can_delete_own_message_group: GroupSettingValue;
		can_set_delete_message_policy_group: GroupSettingValue;
		can_set_topics_policy_group: GroupSettingValue;
		can_invite_users_group: GroupSettingValue;
		can_mention_many_users_group: GroupSettingValue;
		can_move_messages_between_channels_group: GroupSettingValue;
		can_move_messages_between_topics_group: GroupSettingValue;
		can_resolve_topics_group: GroupSettingValue;
		can_manage_all_groups: GroupSettingValue;
		can_manage_billing_group: GroupSettingValue;
		can_summarize_topics_group: GroupSettingValue;
		create_multiuse_invite_group: GroupSettingValue;
		/**
		 * The avatar data source type for new users.
		 *
		 * New in Zulip 12.0 (feature level 456).
		 */
		default_avatar_source: string;
		/**
		 * The default pygments language code to be used for code blocks in this
		 * organization. If an empty string, no default has been set.
		 */
		default_code_block_language: string;
		/** The default language for the organization. */
		default_language: string;
		/** The description of the organization, used on login and registration pages. */
		description: string;
		/** Whether the organization has enabled [weekly digest emails](https://zulip.com/help/digest-emails). */
		digest_emails_enabled: boolean;
		/**
		 * The day of the week when the organization will send
		 * its weekly digest email to inactive users.
		 */
		digest_weekday: number;
		direct_message_initiator_group: GroupSettingValue;
		direct_message_permission_group: GroupSettingValue;
		/**
		 * Whether the organization disallows disposable email
		 * addresses.
		 */
		disallow_disposable_email_addresses: boolean;
		/**
		 * Whether users are allowed to change their own email address in this
		 * organization. This is typically disabled for organizations that
		 * synchronize accounts from LDAP or a similar corporate database.
		 */
		email_changes_disabled: boolean;
		/**
		 * Whether read receipts is enabled in the organization or not.
		 *
		 * New in Zulip 6.0 (feature level 137).
		 */
		enable_read_receipts: boolean;
		/**
		 * Whether [new users joining](https://zulip.com/help/restrict-account-creation#configuring-email-domain-restrictions)
		 * this organization are required to have an email
		 * address in one of the `realm_domains` configured for the organization.
		 */
		emails_restricted_to_domains: boolean;
		/**
		 * Whether clients should show a warning when a user is composing
		 * a DM to a guest user in this organization.
		 *
		 * New in Zulip 10.0 (feature level 348).
		 */
		enable_guest_user_dm_warning: boolean;
		/**
		 * Whether clients should display "(guest)" after the names of
		 * guest users to prominently highlight their status.
		 *
		 * New in Zulip 8.0 (feature level 216).
		 */
		enable_guest_user_indicator: boolean;
		/**
		 * Whether web-public channels are enabled in this organization.
		 *
		 * New in Zulip 5.0 (feature level 109).
		 */
		enable_spectator_access: boolean;
		/**
		 * Maximum rating of the GIFs that will be retrieved by the
		 * GIPHY and Tenor integrations in this organization.
		 *
		 * New in Zulip 4.0 (feature level 55).
		 */
		gif_rating_policy: number;
		/**
		 * String indicating whether the organization's
		 * [profile icon](https://zulip.com/help/create-your-organization-profile) was uploaded
		 * by a user or is the default. Useful for UI allowing editing the organization's icon.
		 */
		icon_source: string;
		/** The URL of the organization's [profile icon](https://zulip.com/help/create-your-organization-profile). */
		icon_url: string;
		/**
		 * The organization's policy for the size of image and video
		 * thumbnails in messages, expressed as a percentage of the
		 * default height. Currently, only certain values are permitted.
		 *
		 * New in Zulip 12.0 (feature level 469).
		 */
		media_preview_size: 100 | 150 | 200;
		/**
		 * Whether this organization has been configured to enable
		 * [previews of linked images](https://zulip.com/help/image-video-and-website-previews).
		 */
		inline_image_preview: boolean;
		/**
		 * Whether this organization has been configured to enable
		 * [previews of linked websites](https://zulip.com/help/image-video-and-website-previews).
		 */
		inline_url_embed_preview: boolean;
		/** Whether an invitation is required to join this organization. */
		invite_required: boolean;
		/**
		 * The URL of the custom Jitsi Meet server configured in this organization's
		 * settings.
		 *
		 * New in Zulip 8.0 (feature level 212).
		 */
		jitsi_server_url: string | null;
		/**
		 * String indicating whether the organization's
		 * [profile wide logo](https://zulip.com/help/create-your-organization-profile) was uploaded
		 * by a user or is the default. Useful for UI allowing editing the
		 * organization's wide logo.
		 */
		logo_source: string;
		/**
		 * The URL of the organization's wide logo configured in the
		 * [organization profile](https://zulip.com/help/create-your-organization-profile).
		 */
		logo_url: string;
		/**
		 * The organization's default policy for sending channel messages to the
		 * [empty "general chat" topic](https://zulip.com/help/general-chat-topic).
		 *
		 * New in Zulip 11.0 (feature level 392).
		 */
		topics_policy: "allow_empty_topic" | "disable_empty_topic";
		/**
		 * Whether [topics are required](https://zulip.com/help/require-topics) for messages in this
		 * organization.
		 * @deprecated
		 */
		mandatory_topics: boolean;
		/**
		 * The new maximum file size that can be uploaded to this Zulip organization.
		 *
		 * New in Zulip 10.0 (feature level 306).
		 */
		max_file_upload_size_mib: number;
		/**
		 * Whether notification emails in this organization are allowed to
		 * contain Zulip the message content, or simply indicate that a new
		 * message was sent.
		 */
		message_content_allowed_in_email_notifications: boolean;
		/**
		 * Messages sent more than this many seconds ago cannot be deleted
		 * with this organization's
		 * [message deletion policy](https://zulip.com/help/restrict-message-editing-and-deletion).
		 */
		message_content_delete_limit_seconds: number | null;
		/**
		 * Messages sent more than this many seconds ago cannot be edited
		 * with this organization's
		 * [message edit policy](https://zulip.com/help/restrict-message-editing-and-deletion).
		 */
		message_content_edit_limit_seconds: number | null;
		/**
		 * Which type of message edit history is configured to allow users to
		 * access [message edit history](https://zulip.com/help/view-a-messages-edit-history).
		 *
		 * New in Zulip 10.0 (feature level 358).
		 */
		message_edit_history_visibility_policy: string;
		/**
		 * The ID of the private channel to which messages flagged by users for
		 * moderation are sent. Moderators can use this channel to review and
		 * act on reported content.
		 *
		 * New in Zulip 10.0 (feature level 331).
		 */
		moderation_request_channel_id: number;
		/**
		 * Messages sent more than this many seconds ago cannot be moved within a
		 * channel to another topic by users who have permission to do so based on this
		 * organization's [topic edit policy](https://zulip.com/help/restrict-moving-messages). This
		 * setting does not affect moderators and administrators.
		 *
		 * New in Zulip 7.0 (feature level 162).
		 */
		move_messages_within_stream_limit_seconds: number | null;
		/**
		 * Messages sent more than this many seconds ago cannot be moved between
		 * channels by users who have permission to do so based on this organization's
		 * [message move policy](https://zulip.com/help/restrict-moving-messages). This setting does
		 * not affect moderators and administrators.
		 *
		 * New in Zulip 7.0 (feature level 162).
		 */
		move_messages_between_streams_limit_seconds: number | null;
		/** The name of the organization, used in login pages etc. */
		name: string;
		/**
		 * Indicates whether users are
		 * [allowed to change](https://zulip.com/help/restrict-name-and-email-changes) their name
		 * via the Zulip UI in this organization. Typically disabled
		 * in organizations syncing this type of account information from
		 * an external user database like LDAP.
		 */
		name_changes_disabled: boolean;
		/**
		 * String indicating whether the organization's dark theme
		 * [profile wide logo](https://zulip.com/help/create-your-organization-profile) was uploaded
		 * by a user or is the default. Useful for UI allowing editing the
		 * organization's wide logo.
		 */
		night_logo_source: string;
		/**
		 * The URL of the organization's dark theme wide-format logo configured in the
		 * [organization profile](https://zulip.com/help/create-your-organization-profile).
		 */
		night_logo_url: string;
		/**
		 * The ID of the channel to which automated messages announcing the
		 * [creation of new channels][new-channel-announce] are sent.
		 */
		new_stream_announcements_stream_id: number;
		/**
		 * The [organization type](https://zulip.com/help/organization-type)
		 * for the realm.
		 *
		 * New in Zulip 6.0 (feature level 128).
		 */
		org_type: number;
		/** The plan type of the organization. */
		plan_type: number;
		/**
		 * Whether online presence of other users is shown in this
		 * organization.
		 */
		presence_disabled: boolean;
		/**
		 * Whether push notifications are enabled for this organization. Typically
		 * `true` for Zulip Cloud and self-hosted realms that have a valid
		 * registration for the [Mobile push notifications
		 * service](https://zulip.readthedocs.io/en/latest/production/mobile-push-notifications.html),
		 * and `false` for self-hosted servers that do not.
		 *
		 * New in Zulip 8.0 (feature level 231).
		 */
		push_notifications_enabled: boolean;
		/**
		 * If the server expects the realm's push notifications access to end at a
		 * definite time in the future, the time at which this is expected to happen.
		 * Mobile clients should use this field to display warnings to users when the
		 * indicated timestamp is near.
		 *
		 * New in Zulip 8.0 (feature level 231).
		 */
		push_notifications_enabled_end_timestamp: number | null;
		/**
		 * Note: Only present if the changed property was `description`.
		 *
		 * New in Zulip 12.0 (feature level 464).
		 */
		rendered_description?: string;
		/**
		 * Whether this realm is configured to disallow sending mobile
		 * push notifications through the legacy mobile push
		 * notifications APIs. The new API uses end-to-end encryption
		 * to protect message content and metadata from being
		 * accessible to the push bouncer service, APNs, and FCM.
		 * Clients that support the new E2EE API will use it
		 * automatically regardless of this setting.
		 *
		 * New in Zulip 11.0 (feature level 409).
		 */
		require_e2ee_push_notifications: boolean;
		/**
		 * Indicates whether the organization is configured to require users to have
		 * unique full names. If true, the server will reject attempts to create a
		 * new user, or change the name of an existing user, where doing so would
		 * lead to two users whose names are identical modulo case and unicode
		 * normalization.
		 *
		 * New in Zulip 9.0 (feature level 246).
		 */
		require_unique_names: boolean;
		/**
		 * Indicates whether channel event messages are sent in this organization.
		 *
		 * New in Zulip 12.0 (feature level 434).
		 */
		send_channel_events_messages: boolean;
		/**
		 * Whether or not this organization is configured to send the standard Zulip
		 * [welcome emails](https://zulip.com/help/disable-welcome-emails) to new users joining the organization.
		 */
		send_welcome_emails: boolean;
		/**
		 * The ID of the channel to which automated messages announcing
		 * that [new users have joined the organization][new-user-announce] are sent.
		 */
		signup_announcements_stream_id: number;
		/**
		 * The new upload quota for the Zulip organization.
		 *
		 * New in Zulip 10.0 (feature level 306).
		 */
		upload_quota_mib: number | null;
		/**
		 * The configured [video call provider](https://zulip.com/help/configure-call-provider) for the
		 * organization.
		 */
		video_chat_provider: number;
		/**
		 * Members whose accounts have been created at least this many days ago
		 * will be treated as [full members][calc-full-member]
		 * for the purpose of settings that restrict access to new members.
		 */
		waiting_period_threshold: number;
		/**
		 * Whether the organization has given permission to be advertised in the
		 * Zulip [communities directory](https://zulip.com/help/communities-directory).
		 *
		 * New in Zulip 6.0 (feature level 129).
		 */
		want_advertise_in_communities_directory: boolean;
		/**
		 * This organization's configured custom message for Welcome Bot
		 * to send to new user accounts, in Zulip Markdown format.
		 *
		 * New in Zulip 11.0 (feature level 416).
		 */
		welcome_message_custom_text: string;
		workplace_users_group: GroupSettingValue;
		/**
		 * The ID of the channel to which automated messages announcing
		 * new features or other end-user updates about the Zulip software are sent.
		 *
		 * New in Zulip 9.0 (feature level 242).
		 */
		zulip_update_announcements_stream_id: number;
	};
}

/**
 * Event sent to all users in a Zulip organization when the
 * [default settings for new users][new-user-defaults]
 * of the organization (realm) have changed.
 *
 * New in Zulip 5.0 (feature level 95).
 */
export interface RealmUserSettingsDefaultsUpdateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "realm_user_settings_defaults";
	op: "update";
	/** The name of the property that was changed. */
	property: string;
	/** The new value of the property. */
	value: boolean | number | string;
}

/** Event containing details of newly created drafts. */
export interface DraftsAddEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "drafts";
	op: "add";
	/** An array containing objects for the newly created drafts. */
	drafts: Draft[];
}

/** Event containing details for an edited draft. */
export interface DraftsUpdateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "drafts";
	op: "update";
	/** A dictionary for representing a message draft. */
	draft: Draft;
}

/** Event containing the ID of a deleted draft. */
export interface DraftsRemoveEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "drafts";
	op: "remove";
	/** The ID of the draft that was just deleted. */
	draft_id: number;
}

/**
 * Event containing details of a newly configured navigation view.
 *
 * New in Zulip 11.0 (feature level 390).
 */
export interface NavigationViewAddEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "navigation_view";
	op: "add";
	/**
	 * Represents a user's personal configuration for a specific
	 * navigation view (displayed most visibly at the top of the web
	 * application's left sidebar).
	 *
	 * New in Zulip 11.0 (feature level 390).
	 */
	navigation_view: NavigationView;
}

/**
 * Event containing details of an update to an existing navigation view.
 *
 * New in Zulip 11.0 (feature level 390).
 */
export interface NavigationViewUpdateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "navigation_view";
	op: "update";
	/** The unique URL hash of the navigation view being updated. */
	fragment: string;
	/** A dictionary containing the updated properties of the navigation view. */
	data: {
		/** The user-facing name for custom navigation views. Omit this field for built-in views. */
		name: string | null;
		/** Determines whether the view is pinned (true) or hidden in the menu (false). */
		is_pinned: boolean | null;
	};
}

/**
 * Event containing the fragment of a deleted navigation view.
 *
 * New in Zulip 11.0 (feature level 390).
 */
export interface NavigationViewRemoveEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "navigation_view";
	op: "remove";
	/** The unique URL hash of the navigation view that was just deleted. */
	fragment: string;
}

/**
 * Event containing details of a newly created saved snippet.
 *
 * New in Zulip 10.0 (feature level 297).
 */
export interface SavedSnippetsAddEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "saved_snippets";
	op: "add";
	/** Object containing the details of the saved snippet. */
	saved_snippet: SavedSnippet;
}

/**
 * Event containing details of the edited saved snippet.
 *
 * New in Zulip 10.0 (feature level 368).
 */
export interface SavedSnippetsUpdateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "saved_snippets";
	op: "update";
	/** Object containing the details of the saved snippet. */
	saved_snippet: SavedSnippet;
}

/**
 * Event containing the ID of a deleted saved snippet.
 *
 * New in Zulip 10.0 (feature level 297).
 */
export interface SavedSnippetsRemoveEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "saved_snippets";
	op: "remove";
	/**
	 * The ID of the saved snippet that was just deleted.
	 *
	 * New in Zulip 10.0 (feature level 297).
	 */
	saved_snippet_id: number;
}

/**
 * Event sent to a user's clients when a reminder is scheduled.
 *
 * New in Zulip 11.0 (feature level 399).
 */
export interface RemindersAddEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "reminders";
	op: "add";
	/**
	 * An array of objects containing details of the newly created
	 * reminders.
	 */
	reminders: Reminder[];
}

/**
 * Event sent to a user's clients when a reminder
 * is deleted.
 *
 * New in Zulip 11.0 (feature level 399).
 */
export interface RemindersRemoveEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "reminders";
	op: "remove";
	/** The ID of the reminder that was deleted. */
	reminder_id: number;
}

/**
 * Event sent to a user's clients when scheduled messages
 * are created.
 *
 * New in Zulip 7.0 (feature level 179).
 */
export interface ScheduledMessagesAddEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "scheduled_messages";
	op: "add";
	/**
	 * An array of objects containing details of the newly created
	 * scheduled messages.
	 */
	scheduled_messages: ScheduledMessage[];
}

/**
 * Event sent to a user's clients when a scheduled message
 * is edited.
 *
 * New in Zulip 7.0 (feature level 179).
 */
export interface ScheduledMessagesUpdateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "scheduled_messages";
	op: "update";
	scheduled_message: ScheduledMessage;
}

/**
 * Event sent to a user's clients when a scheduled message
 * is deleted.
 *
 * New in Zulip 7.0 (feature level 179).
 */
export interface ScheduledMessagesRemoveEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "scheduled_messages";
	op: "remove";
	/** The ID of the scheduled message that was deleted. */
	scheduled_message_id: number;
}

/**
 * Event sent to users in an organization when a channel folder is created.
 *
 * New in Zulip 11.0 (feature level 389).
 */
export interface ChannelFolderAddEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "channel_folder";
	op: "add";
	/** Object containing the channel folder's attributes. */
	channel_folder: ChannelFolder;
}

/**
 * Event sent to users in an organization when a channel folder is updated.
 *
 * New in Zulip 11.0 (feature level 389).
 */
export interface ChannelFolderUpdateEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "channel_folder";
	op: "update";
	/** ID of the updated channel folder. */
	channel_folder_id: number;
	/** Dictionary containing the changed details of the channel folder. */
	data: {
		/**
		 * The new name of the channel folder. Only present if the channel
		 * folder's name changed.
		 */
		name?: string;
		/**
		 * The new description of the channel folder. Only present if the
		 * description changed.
		 */
		description?: string;
		/**
		 * The new rendered description of the channel folder. Only present
		 * if the description changed.
		 */
		rendered_description?: string;
		/**
		 * Whether the channel folder is archived or not. Only present if
		 * the channel folder is archived or unarchived.
		 */
		is_archived?: boolean;
	};
}

/**
 * Event sent to users in an organization when channel folders are reordered.
 *
 * New in Zulip 11.0 (feature level 418).
 */
export interface ChannelFolderReorderEvent {
	/** The ID of the event. Events appear in increasing order but may not be consecutive. */
	id: EventIdSchema;
	type: EventTypeSchema & "channel_folder";
	op: "reorder";
	/** A list of channel folder IDs representing the new order. */
	order: number[];
}

/** Any event the events API can deliver. Narrow it by `type`, and by `op` where there is one. */
export type ZulipEvent =
	| AlertWordsEvent
	| UserSettingsUpdateEvent
	| RealmUserUpdateEvent
	| SubscriptionAddEvent
	| SubscriptionRemoveEvent
	| SubscriptionUpdateEvent
	| SubscriptionPeerAddEvent
	| SubscriptionPeerRemoveEvent
	| MessageEvent
	| HasZoomTokenEvent
	| HasWebexTokenEvent
	| InvitesChangedEvent
	| RealmUserAddEvent
	| RealmUserRemoveEvent
	| PresenceEvent
	| StreamCreateEvent
	| StreamDeleteEvent
	| StreamUpdateEvent
	| ReactionAddEvent
	| ReactionRemoveEvent
	| AttachmentAddEvent
	| AttachmentUpdateEvent
	| AttachmentRemoveEvent
	| DeviceAddEvent
	| DeviceRemoveEvent
	| DeviceUpdateEvent
	| SubmessageEvent
	| UserStatusEvent
	| CustomProfileFieldsEvent
	| DefaultStreamGroupsEvent
	| DefaultStreamsEvent
	| DeleteMessageEvent
	| MutedTopicsEvent
	| UserTopicEvent
	| MutedUsersEvent
	| HeartbeatEvent
	| OnboardingStepsEvent
	| UpdateMessageEvent
	| TypingStartEvent
	| TypingStopEvent
	| TypingEditMessageStartEvent
	| TypingEditMessageStopEvent
	| UpdateMessageFlagsAddEvent
	| UpdateMessageFlagsRemoveEvent
	| UserGroupAddEvent
	| UserGroupUpdateEvent
	| UserGroupAddMembersEvent
	| UserGroupRemoveMembersEvent
	| UserGroupAddSubgroupsEvent
	| UserGroupRemoveSubgroupsEvent
	| UserGroupRemoveEvent
	| RealmLinkifiersEvent
	| RealmFiltersEvent
	| RealmPlaygroundsEvent
	| RealmEmojiAddEvent
	| RealmEmojiUpdateOneEvent
	| RealmEmojiUpdateEvent
	| RealmDomainsAddEvent
	| RealmDomainsChangeEvent
	| RealmDomainsRemoveEvent
	| RealmExportEvent
	| RealmExportConsentEvent
	| RealmBotAddEvent
	| RealmBotUpdateEvent
	| RealmBotRemoveEvent
	| RealmBotDeleteEvent
	| RealmUpdateEvent
	| RealmDeactivatedEvent
	| RestartEvent
	| WebReloadClientEvent
	| RealmUpdateDictEvent
	| RealmUserSettingsDefaultsUpdateEvent
	| DraftsAddEvent
	| DraftsUpdateEvent
	| DraftsRemoveEvent
	| NavigationViewAddEvent
	| NavigationViewUpdateEvent
	| NavigationViewRemoveEvent
	| SavedSnippetsAddEvent
	| SavedSnippetsUpdateEvent
	| SavedSnippetsRemoveEvent
	| RemindersAddEvent
	| RemindersRemoveEvent
	| ScheduledMessagesAddEvent
	| ScheduledMessagesUpdateEvent
	| ScheduledMessagesRemoveEvent
	| ChannelFolderAddEvent
	| ChannelFolderUpdateEvent
	| ChannelFolderReorderEvent;

export interface FetchApiKeyParams {
	/**
	 * The username to be used for authentication (typically, the email
	 * address, but depending on configuration, it could be an LDAP username).
	 */
	username: string;
	/** The user's Zulip password (or LDAP password, if LDAP authentication is in use). */
	password: string;
}

export type FetchApiKeyResponse = ApiKeyResponse;

export interface JwtFetchApiKeyParams {
	/** A JSON Web Token for the target user. */
	token: string;
	/**
	 * Whether to include a `user` object containing the target
	 * user's profile details in the response.
	 */
	include_profile?: boolean;
}

export type JwtFetchApiKeyResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The API key that can be used to authenticate as the requested user. */
	api_key: string;
	/** The email address of the user who owns the API key. */
	email: string;
	/** Only present if `include_profile` parameter was set to `true`. */
	user?: UserBase & {
		user_id?: unknown;
		delivery_email: unknown;
		email?: unknown;
		full_name?: unknown;
		date_joined?: unknown;
		is_active?: unknown;
		is_owner?: unknown;
		is_admin?: unknown;
		is_guest?: unknown;
		is_bot?: unknown;
		bot_type: unknown;
		bot_owner_id: unknown;
		role?: unknown;
		timezone?: unknown;
		avatar_url: unknown;
		avatar_version?: unknown;
		is_imported_stub?: unknown;
	};
};

export interface DevFetchApiKeyParams {
	/** The email address for the user that owns the API key. */
	username: string;
}

export type DevFetchApiKeyResponse = ApiKeyResponse;

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type DevListUsersParams = {};

export type DevListUsersResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** A list of administrators in the development server. */
	direct_admins: {
		/** The email of the dev admin user. */
		email: string;
		/** The URL of the dev admin user's organization. */
		realm_url: string;
	}[];
	/** A list of non-admin users in the development server. */
	direct_users: {
		/** The email of the dev user. */
		email: string;
		/** The URL of the dev user's organization. */
		realm_url: string;
	}[];
};

export interface GetEventsParams {
	/**
	 * The ID of an event queue that was previously registered via
	 * `POST /api/v1/register` (see [Register a queue](https://zulip.com/api/register-queue)).
	 */
	queue_id: string;
	/**
	 * The highest event ID in this queue that you've received and
	 * wish to acknowledge. See the [code for
	 * `call_on_each_event`](https://github.com/zulip/python-zulip-api/blob/main/zulip/zulip/__init__.py)
	 * in the [zulip Python
	 * module](https://github.com/zulip/python-zulip-api) for an
	 * example implementation of correctly processing each event
	 * exactly once.
	 */
	last_event_id?: number;
	/**
	 * Set to `true` if the client is requesting a nonblocking reply. If not
	 * specified, the request will block until either a new event is available
	 * or a few minutes have passed, in which case the server will send the
	 * client a heartbeat event.
	 */
	dont_block?: boolean;
}

export type GetEventsResponse = JsonSuccessBase & {
	/** The events, oldest first. */
	events: ZulipEvent[];
	/** The ID of the queue the events came from. */
	queue_id?: string;
};

export interface DeleteQueueParams {
	/**
	 * The ID of an event queue that was previously registered via
	 * `POST /api/v1/register` (see [Register a queue](https://zulip.com/api/register-queue)).
	 */
	queue_id: string;
}

export type DeleteQueueResponse = JsonSuccess;

export interface GetStreamIdParams {
	/** The name of the channel to access. */
	stream: string;
}

export type GetStreamIdResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The ID of the given channel. */
	stream_id: number;
};

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type MarkAllAsReadParams = {};

export type MarkAllAsReadResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** Whether all unread messages were marked as read. */
	complete: boolean;
};

export interface MarkStreamAsReadParams {
	/** The ID of the channel to access. */
	stream_id: number;
}

export type MarkStreamAsReadResponse = JsonSuccess;

export interface MarkTopicAsReadParams {
	/** The ID of the channel to access. */
	stream_id: number;
	/** The name of the topic whose messages should be marked as read. */
	topic_name: string;
}

export type MarkTopicAsReadResponse = JsonSuccess;

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetAttachmentsParams = {};

export type GetAttachmentsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * A list of `attachment` objects, each containing
	 * details about a file uploaded by the user.
	 */
	attachments: Attachment[];
	/**
	 * The total size of all files uploaded by users in the organization,
	 * in bytes.
	 */
	upload_space_used: number;
};

export interface RemoveAttachmentParams {
	/** The ID of the attachment to be deleted. */
	attachment_id: number;
}

export type RemoveAttachmentResponse = JsonSuccess;

export interface GetBotStorageParams {
	/** A JSON-encoded list of keys for data in the bot's storage. */
	keys?: string[];
}

export type GetBotStorageResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * A dictionary with string key-value pairs of
	 * data stored for the bot user.
	 */
	storage: Record<string, string>;
};

export interface UpdateBotStorageParams {
	/**
	 * A JSON-encoded dictionary mapping string keys to string values
	 * that will be added to the bot's storage.
	 */
	storage: Record<string, string>;
}

export type UpdateBotStorageResponse = JsonSuccess;

export interface RemoveBotStorageParams {
	/** A JSON-encoded list of keys to delete from the bot's storage. */
	keys?: string[];
}

export type RemoveBotStorageResponse = JsonSuccess;

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetDraftsParams = {};

export type GetDraftsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * The number of drafts the user currently has. Also the
	 * number of drafts returned under "drafts".
	 */
	count: number;
	/**
	 * Returns all of the current user's drafts, in order of last edit time
	 * (with the most recently edited draft appearing first).
	 */
	drafts: Draft[];
};

export interface CreateDraftsParams {
	/** A JSON-encoded list of containing new draft objects. */
	drafts?: Draft[];
}

export type CreateDraftsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * An array of the IDs for the drafts that were just created in the same
	 * order as they were submitted.
	 */
	ids: number[];
};

export interface EditDraftParams {
	/** The ID of the draft to be edited. */
	draft_id: number;
	draft: Draft;
}

export type EditDraftResponse = JsonSuccess;

export interface DeleteDraftParams {
	/** The ID of the draft you want to delete. */
	draft_id: number;
}

export type DeleteDraftResponse = JsonSuccess;

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetNavigationViewsParams = {};

export type GetNavigationViewsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	/** An array of dictionaries containing the user's navigation views. */
	navigation_views: NavigationView[];
};

export interface AddNavigationViewParams {
	/**
	 * A unique identifier for the view, used to determine navigation
	 * behavior when clicked.
	 */
	fragment: string;
	/**
	 * Determines whether the view appears directly in the sidebar or
	 * is hidden in the "More Views" menu.
	 */
	is_pinned: boolean;
	/**
	 * The user-facing name for custom navigation views. Omit this
	 * field for built-in views.
	 */
	name?: string | null;
}

export type AddNavigationViewResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
};

export interface EditNavigationViewParams {
	/** The unique URL hash of the navigation view to be updated. */
	fragment: string;
	/**
	 * Determines whether the view is pinned (true) or hidden in
	 * the menu (false).
	 */
	is_pinned?: boolean;
	/**
	 * The user-facing name for custom navigation views. Omit this
	 * field for built-in views.
	 */
	name?: string;
}

export type EditNavigationViewResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
};

export interface RemoveNavigationViewParams {
	/** The unique URL hash of the navigation view to be removed. */
	fragment: string;
}

export type RemoveNavigationViewResponse = JsonSuccess;

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetSavedSnippetsParams = {};

export type GetSavedSnippetsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * An array of dictionaries containing data on all of the current user's
	 * saved snippets.
	 */
	saved_snippets: SavedSnippet[];
};

export interface CreateSavedSnippetParams {
	/** The title of the saved snippet. */
	title: string;
	/** The content of the saved snippet in [Zulip-flavored Markdown](https://zulip.com/help/format-your-message-using-markdown) format. */
	content: string;
}

export type CreateSavedSnippetResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The unique ID of the saved snippet created. */
	saved_snippet_id: number;
};

export interface EditSavedSnippetParams {
	/** The ID of the saved snippet to edit. */
	saved_snippet_id: number;
	/** The title of the saved snippet. */
	title?: string;
	/** The content of the saved snippet in the original [Zulip-flavored Markdown](https://zulip.com/help/format-your-message-using-markdown) format. */
	content?: string;
}

export type EditSavedSnippetResponse = JsonSuccess;

export interface DeleteSavedSnippetParams {
	/** The ID of the saved snippet to delete. */
	saved_snippet_id: number;
}

export type DeleteSavedSnippetResponse = JsonSuccess;

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetRemindersParams = {};

export type GetRemindersResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * Returns all of the current user's undelivered reminders,
	 * ordered by `scheduled_delivery_timestamp` (ascending).
	 */
	reminders: Reminder[];
};

export interface CreateMessageReminderParams {
	/** The ID of the previously sent message to reference in the reminder message. */
	message_id?: number;
	/**
	 * The UNIX timestamp for when the reminder will be sent,
	 * in UTC seconds.
	 */
	scheduled_delivery_timestamp?: number;
	/**
	 * A note associated with the reminder shown in the Notification Bot message.
	 *
	 * New in Zulip 11.0 (feature level 415).
	 */
	note?: string;
}

export type CreateMessageReminderResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** Unique ID of the scheduled message reminder. */
	reminder_id: number;
};

export interface DeleteReminderParams {
	/** The ID of the reminder to delete. */
	reminder_id: number;
}

export type DeleteReminderResponse = JsonSuccess;

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetScheduledMessagesParams = {};

export type GetScheduledMessagesResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * Returns all of the current user's undelivered scheduled
	 * messages, ordered by `scheduled_delivery_timestamp`
	 * (ascending).
	 */
	scheduled_messages: ScheduledMessage[];
};

export interface CreateScheduledMessageParams {
	/**
	 * The type of scheduled message to be sent. `"direct"` for a direct
	 * message and `"stream"` or `"channel"` for a channel message.
	 */
	type: "direct" | "channel" | "stream" | "private";
	/** The scheduled message's tentative target audience. */
	to: number | number[];
	/** The content of the message. */
	content: RequiredContent;
	/**
	 * The topic of the message. Only required for channel messages
	 * (`"type": "stream"` or `"type": "channel"`), ignored otherwise.
	 */
	topic?: string;
	/**
	 * The UNIX timestamp for when the message will be sent,
	 * in UTC seconds.
	 */
	scheduled_delivery_timestamp: number;
	/**
	 * Whether the message should be initially marked read by its
	 * sender. If unspecified, the server uses a heuristic based
	 * on the client name and the recipient.
	 *
	 * New in Zulip 8.0 (feature level 236).
	 */
	read_by_sender?: boolean;
}

export type CreateScheduledMessageResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The unique ID of the scheduled message. */
	scheduled_message_id: number;
};

export interface UpdateScheduledMessageParams {
	/** The ID of the scheduled message to update. */
	scheduled_message_id: number;
	/**
	 * The type of scheduled message to be sent. `"direct"` for a direct
	 * message and `"stream"` or `"channel"` for a channel message.
	 */
	type?: "direct" | "channel" | "stream" | "private";
	/** The scheduled message's tentative target audience. */
	to?: number | number[];
	/** The updated content of the scheduled message. */
	content?: string;
	/** The updated topic of the scheduled message. */
	topic?: string;
	/**
	 * The UNIX timestamp for when the message will be sent,
	 * in UTC seconds.
	 */
	scheduled_delivery_timestamp?: number;
}

export type UpdateScheduledMessageResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
};

export interface DeleteScheduledMessageParams {
	/** The ID of the scheduled message to delete. */
	scheduled_message_id: number;
}

export type DeleteScheduledMessageResponse = JsonSuccess;

export interface AddDefaultStreamParams {
	/** The ID of the target channel. */
	stream_id: number;
}

export type AddDefaultStreamResponse = JsonSuccess;

export interface RemoveDefaultStreamParams {
	/** The ID of the target channel. */
	stream_id: number;
}

export type RemoveDefaultStreamResponse = JsonSuccess;

export interface GetMessagesParams {
	/**
	 * Integer message ID to anchor fetching of new messages. Supports special
	 * string values for when the client wants the server to compute the anchor
	 * to use:
	 */
	anchor?: Anchor;
	/**
	 * Whether a message with the specified ID matching the narrow
	 * should be included.
	 *
	 * New in Zulip 6.0 (feature level 155).
	 */
	include_anchor?: boolean;
	/**
	 * The date or datetime to use for finding the anchor message when `anchor` is
	 * `date`. Accepted formats include ISO 8601 date-only strings
	 * (e.g. `2005-04-18`) as well as full datetime strings
	 * (e.g. `2005-04-18T12:34:56Z`). If only a date is provided, the datetime is set to
	 * midnight (00:00) on that day in UTC. If no timezone is provided, UTC is
	 * assumed.
	 *
	 * New in Zulip 12.0 (feature level 445).
	 */
	anchor_date?: string;
	/**
	 * The number of messages with IDs less than the anchor to retrieve.
	 * Required if `message_ids` is not provided.
	 */
	num_before?: number;
	/**
	 * The number of messages with IDs greater than the anchor to retrieve.
	 * Required if `message_ids` is not provided.
	 */
	num_after?: number;
	/**
	 * The narrow where you want to fetch the messages from. See how to
	 * [construct a narrow](https://zulip.com/api/construct-narrow).
	 */
	narrow?: ({
		operator: string;
		operand: string | number | number[];
		negated?: boolean;
	} | string[])[];
	/**
	 * Whether the client supports computing gravatars URLs. If
	 * enabled, `avatar_url` will be included in the response only
	 * if there is a Zulip avatar, and will be `null` for users who
	 * are using gravatar as their avatar. This option
	 * significantly reduces the compressed size of user data,
	 * since gravatar URLs are long, random strings and thus do not
	 * compress well. The `client_gravatar` field is set to `true` if
	 * clients can compute their own gravatars.
	 */
	client_gravatar?: boolean;
	/**
	 * If `true`, message content is returned in the rendered HTML
	 * format. If `false`, message content is returned in the raw
	 * Markdown-format text that user entered.
	 */
	apply_markdown?: boolean;
	/**
	 * Legacy way to specify `"anchor": "first_unread"` in Zulip 2.1.x and older.
	 * @deprecated
	 */
	use_first_unread_anchor?: boolean;
	/**
	 * A list of message IDs to fetch. The server will return messages corresponding to the
	 * subset of the requested message IDs that exist and the current user has access to,
	 * potentially filtered by the narrow (if that parameter is provided).
	 *
	 * New in Zulip 10.0 (feature level 300).
	 */
	message_ids?: number[];
	/**
	 * Whether the client supports processing the empty string as a topic in the
	 * topic name fields in the returned data, including in returned edit_history data.
	 *
	 * New in Zulip 10.0 (feature level 334).
	 */
	allow_empty_topic_name?: boolean;
}

export type GetMessagesResponse = JsonSuccessBase & {
	result: unknown;
	msg: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * The same `anchor` specified in the request (or the computed one, if
	 * `use_first_unread_anchor` is `true`).
	 */
	anchor?: number;
	/**
	 * Whether the server promises that the `messages` list includes the very
	 * newest messages matching the narrow (used by clients that paginate their
	 * requests to decide whether there may be more messages to fetch).
	 */
	found_newest?: boolean;
	/**
	 * Whether the server promises that the `messages` list includes the very
	 * oldest messages matching the narrow (used by clients that paginate their
	 * requests to decide whether there may be more messages to fetch).
	 */
	found_oldest?: boolean;
	/**
	 * Whether the anchor message is included in the
	 * response. If the message with the ID specified
	 * in the request does not exist, did not match
	 * the narrow, or was excluded via
	 * `"include_anchor": false`, this will be false.
	 */
	found_anchor?: boolean;
	/**
	 * Whether the message history was limited due to
	 * plan restrictions. This flag is set to `true`
	 * only when the oldest messages(`found_oldest`)
	 * matching the narrow is fetched.
	 */
	history_limited?: boolean;
	/** An array of `message` objects. */
	messages: (MessagesBase & {
		avatar_url: unknown;
		client?: unknown;
		content?: unknown;
		content_type?: unknown;
		display_recipient?: unknown;
		edit_history?: unknown;
		id?: unknown;
		is_me_message?: unknown;
		last_edit_timestamp?: unknown;
		last_moved_timestamp?: unknown;
		reactions?: unknown;
		recipient_id?: unknown;
		sender_email?: unknown;
		sender_full_name?: unknown;
		sender_id?: unknown;
		sender_realm_str?: unknown;
		stream_id?: unknown;
		subject?: unknown;
		submessages?: unknown;
		timestamp?: unknown;
		topic_links?: unknown;
		type?: unknown;
		/** The user's [message flags][message-flags] for the message. */
		flags: string[];
		/** Only present if keyword search was included among the narrow parameters. */
		match_content?: string;
		/** Only present if keyword search was included among the narrow parameters. */
		match_subject?: string;
	})[];
};

export interface SendMessageParams {
	/** The type of message to be sent. */
	type: "direct" | "channel" | "stream" | "private";
	/** The channel or users receiving the message. */
	to: string | number | string[] | number[];
	/** The content of the message. */
	content: RequiredContent;
	/**
	 * The topic of the message. Only required for channel messages
	 * (`"type": "stream"` or `"type": "channel"`), ignored otherwise.
	 */
	topic?: string;
	/**
	 * For clients supporting
	 * [local echo](https://zulip.readthedocs.io/en/latest/subsystems/sending-messages.html#local-echo),
	 * the [event queue](https://zulip.com/api/register-queue) ID for the client.
	 */
	queue_id?: string;
	/**
	 * For clients supporting
	 * [local echo](https://zulip.readthedocs.io/en/latest/subsystems/sending-messages.html#local-echo),
	 * a unique string-format identifier chosen freely by the client.
	 */
	local_id?: string;
	/**
	 * Whether the message should be initially marked read by its
	 * sender. If unspecified, the server uses a heuristic based
	 * on the client name.
	 *
	 * New in Zulip 8.0 (feature level 236).
	 */
	read_by_sender?: boolean;
}

export type SendMessageResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The unique ID assigned to the sent message. */
	id: number;
	/**
	 * If the message's sender had configured their [visibility policy settings](https://zulip.com/help/mute-a-topic)
	 * to potentially automatically follow or unmute topics when sending messages,
	 * and one of these policies did in fact change the user's visibility policy
	 * for the topic where this message was sent, the new value for that user's
	 * visibility policy for the recipient topic.
	 *
	 * New in Zulip 8.0 (feature level 218).
	 */
	automatic_new_visibility_policy?: 2 | 3;
};

export interface GetMessageHistoryParams {
	/** The target message's ID. */
	message_id: number;
	/**
	 * Whether the topic names i.e. `topic` and `prev_topic` fields in
	 * the `message_history` objects returned can be empty string.
	 *
	 * New in Zulip 10.0 (feature level 334).
	 */
	allow_empty_topic_name?: boolean;
}

export type GetMessageHistoryResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * A chronologically sorted, oldest to newest, array
	 * of `snapshot` objects, each one with the values of
	 * the message after the edit.
	 */
	message_history: {
		/**
		 * The topic of the message immediately
		 * after this edit event.
		 */
		topic: string;
		/** Only present if message's topic was edited. */
		prev_topic?: string;
		/**
		 * Only present if message's channel was edited.
		 *
		 * New in Zulip 5.0 (feature level 118).
		 */
		stream?: number;
		/**
		 * Only present if message's channel was edited.
		 *
		 * New in Zulip 3.0 (feature level 1).
		 */
		prev_stream?: number;
		/**
		 * The raw [Zulip-flavored Markdown](https://zulip.com/help/format-your-message-using-markdown) content of the message
		 * immediately after this edit event.
		 */
		content: string;
		/** The rendered HTML representation of `content`. */
		rendered_content: string;
		/** Only present if message's content was edited. */
		prev_content?: string;
		/** Only present if message's content was edited. */
		prev_rendered_content?: string;
		/** The ID of the user that made the edit. */
		user_id: number | null;
		/** Only present if message's content was edited. */
		content_html_diff?: string;
		/** The UNIX timestamp for this edit. */
		timestamp: number;
	}[];
};

export interface UpdateMessageFlagsParams {
	/** An array containing the IDs of the target messages. */
	messages: number[];
	/** Whether to `add` the flag or `remove` it. */
	op: "add" | "remove";
	/** The flag that should be added/removed. */
	flag: string;
}

export type UpdateMessageFlagsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** An array with the IDs of the modified messages. */
	messages: number[];
	/**
	 * Only present if the flag is `read` and the operation is `remove`.
	 *
	 * New in Zulip 10.0 (feature level 355).
	 */
	ignored_because_not_subscribed_channels?: number[];
};

export interface UpdateMessageFlagsForNarrowParams {
	anchor: Anchor;
	/**
	 * Whether a message with the specified ID matching the narrow
	 * should be included in the update range.
	 */
	include_anchor?: boolean;
	/**
	 * Limit the number of messages preceding the anchor in the
	 * update range. The server may decrease this to bound
	 * transaction sizes.
	 */
	num_before: number;
	/**
	 * Limit the number of messages following the anchor in the
	 * update range. The server may decrease this to bound
	 * transaction sizes.
	 */
	num_after: number;
	/**
	 * The narrow you want update flags within. See how to
	 * [construct a narrow](https://zulip.com/api/construct-narrow).
	 */
	narrow: ({
		operator: string;
		operand: string | number | number[];
		negated?: boolean;
	} | string[])[];
	/** Whether to `add` the flag or `remove` it. */
	op: "add" | "remove";
	/**
	 * The flag that should be added/removed. See [available
	 * flags](https://zulip.com/api/update-message-flags#available-flags).
	 */
	flag: string;
}

export type UpdateMessageFlagsForNarrowResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	/**
	 * The number of messages that were within the
	 * update range (at most `num_before + 1 +
	 * num_after`).
	 */
	processed_count: number;
	/**
	 * The number of messages where the flag's
	 * value was changed (at most
	 * `processed_count`).
	 */
	updated_count: number;
	/**
	 * The ID of the oldest message within the
	 * update range, or `null` if the range was
	 * empty.
	 */
	first_processed_id: number | null;
	/**
	 * The ID of the newest message within the
	 * update range, or `null` if the range was
	 * empty.
	 */
	last_processed_id: number | null;
	/**
	 * Whether the update range reached backward
	 * far enough to include very oldest message
	 * matching the narrow (used by clients doing a
	 * bulk update to decide whether to issue
	 * another request anchored at
	 * `first_processed_id`).
	 */
	found_oldest: boolean;
	/**
	 * Whether the update range reached forward far
	 * enough to include very oldest message
	 * matching the narrow (used by clients doing a
	 * bulk update to decide whether to issue
	 * another request anchored at
	 * `last_processed_id`).
	 */
	found_newest: boolean;
	/**
	 * Only present if the flag is `read` and the operation is `remove`.
	 *
	 * New in Zulip 10.0 (feature level 355).
	 */
	ignored_because_not_subscribed_channels?: number[];
};

export interface RenderMessageParams {
	/** The content of the message. */
	content: RequiredContent;
}

export type RenderMessageResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The rendered HTML. */
	rendered: string;
};

export interface AddReactionParams {
	/** The target message's ID. */
	message_id: number;
	/** The target emoji's human-readable name. */
	emoji_name: string;
	/**
	 * A unique identifier, defining the specific emoji codepoint requested,
	 * within the namespace of the `reaction_type`.
	 */
	emoji_code?: EmojiCode;
	/**
	 * A string indicating the type of emoji. Each emoji `reaction_type`
	 * has an independent namespace for values of `emoji_code`.
	 */
	reaction_type?: ReactionType;
}

export type AddReactionResponse = JsonSuccess;

export interface RemoveReactionParams {
	/** The target message's ID. */
	message_id: number;
	/** The target emoji's human-readable name. */
	emoji_name?: string;
	/**
	 * A unique identifier, defining the specific emoji codepoint requested,
	 * within the namespace of the `reaction_type`.
	 */
	emoji_code?: EmojiCode;
	/**
	 * A string indicating the type of emoji. Each emoji `reaction_type`
	 * has an independent namespace for values of `emoji_code`.
	 */
	reaction_type?: ReactionType;
}

export type RemoveReactionResponse = JsonSuccess;

export interface GetReadReceiptsParams {
	/** The target message's ID. */
	message_id: number;
}

export type GetReadReceiptsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * An array of IDs of users who have marked the target message as
	 * read and whose read status is available to the current user.
	 */
	user_ids?: number[];
};

export interface CheckMessagesMatchNarrowParams {
	/** List of IDs for the messages to check. */
	msg_ids: number[];
	/**
	 * A structure defining the narrow to check against. See how to
	 * [construct a narrow](https://zulip.com/api/construct-narrow).
	 */
	narrow: Record<string, unknown>[];
}

export type CheckMessagesMatchNarrowResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * A dictionary with a key for each queried message that matches the narrow,
	 * with message IDs as keys and search rendering data as values.
	 */
	messages: Record<string, {
			/**
			 * HTML content of a queried message that matches the narrow. If the
			 * narrow is a search narrow, `<span class="highlight">` elements
			 * will be included, wrapping the matches for the search keywords.
			 */
			match_content: string;
			/**
			 * HTML-escaped topic of a queried message that matches the narrow. If the
			 * narrow is a search narrow, `<span class="highlight">` elements
			 * will be included wrapping the matches for the search keywords.
			 */
			match_subject: string;
		}>;
};

export interface GetMessageParams {
	/** The target message's ID. */
	message_id: number;
	/**
	 * If `true`, message content is returned in the rendered HTML
	 * format. If `false`, message content is returned in the raw
	 * [Zulip-flavored Markdown format](https://zulip.com/help/format-your-message-using-markdown) text that user entered.
	 *
	 * New in Zulip 5.0 (feature level 120).
	 */
	apply_markdown?: boolean;
	/**
	 * Whether the client supports processing the empty string as a topic in the
	 * topic name fields in the returned data, including in returned edit_history data.
	 *
	 * New in Zulip 10.0 (feature level 334).
	 */
	allow_empty_topic_name?: boolean;
}

export type GetMessageResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * The raw Markdown content of the message.
	 * @deprecated
	 */
	raw_content: string;
	/**
	 * An object containing details of the message.
	 *
	 * New in Zulip 5.0 (feature level 120).
	 */
	message: MessagesBase & {
		avatar_url: unknown;
		client?: unknown;
		content?: unknown;
		content_type?: unknown;
		display_recipient?: unknown;
		edit_history?: unknown;
		id?: unknown;
		is_me_message?: unknown;
		last_edit_timestamp?: unknown;
		last_moved_timestamp?: unknown;
		reactions?: unknown;
		recipient_id?: unknown;
		sender_email?: unknown;
		sender_full_name?: unknown;
		sender_id?: unknown;
		sender_realm_str?: unknown;
		stream_id?: unknown;
		subject?: unknown;
		submessages?: unknown;
		timestamp?: unknown;
		topic_links?: unknown;
		type?: unknown;
		/** The user's [message flags][message-flags] for the message. */
		flags: string[];
	};
};

export interface UpdateMessageParams {
	/** The target message's ID. */
	message_id: number;
	/** The topic to move the message(s) to, to request changing the topic. */
	topic?: string;
	/** Which message(s) should be edited: */
	propagate_mode?: "change_one" | "change_later" | "change_all";
	/**
	 * Whether to send an automated message to the old topic to
	 * notify users where the messages were moved to.
	 *
	 * New in Zulip 3.0 (feature level 9).
	 */
	send_notification_to_old_thread?: boolean;
	/**
	 * Whether to send an automated message to the new topic to
	 * notify users where the messages came from.
	 *
	 * New in Zulip 3.0 (feature level 9).
	 */
	send_notification_to_new_thread?: boolean;
	/** The updated content of the target message. */
	content?: OptionalContent;
	/**
	 * An optional SHA-256 hash of the previous raw content of the message
	 * that the client has at the time of the request.
	 *
	 * New in Zulip 11.0 (feature level 379).
	 */
	prev_content_sha256?: string;
	/**
	 * The channel ID to move the message(s) to, to request moving
	 * messages to another channel.
	 *
	 * New in Zulip 3.0 (feature level 1).
	 */
	stream_id?: number;
}

export type UpdateMessageResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * Details on all files uploaded by the acting user whose only references
	 * were removed when editing this message. Clients should ask the acting user
	 * if they wish to delete the uploaded files returned in this response,
	 * which might otherwise remain visible only in message edit history.
	 *
	 * New in Zulip 10.0 (feature level 285).
	 */
	detached_uploads: Attachment[];
};

export interface DeleteMessageParams {
	/** The target message's ID. */
	message_id: number;
}

export type DeleteMessageResponse = JsonSuccess;

export interface ReportMessageParams {
	/** The target message's ID. */
	message_id: number;
	/**
	 * The reason that best describes why the current user is reporting the
	 * target message for moderation.
	 */
	report_type: string;
	/**
	 * A short description with additional context about why the current user
	 * is reporting the target message for moderation.
	 */
	description?: string;
}

export type ReportMessageResponse = JsonSuccess;

export interface UploadFileParams {
	filename?: Blob;
}

export type UploadFileResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * The URL of the uploaded file. Alias of `url`.
	 * @deprecated
	 */
	uri: string;
	/**
	 * The URL of the uploaded file.
	 *
	 * New in Zulip 9.0 (feature level 272).
	 */
	url: string;
	/**
	 * The filename that Zulip stored the upload as. This usually
	 * differs from the basename of the URL when HTML escaping is
	 * required to generate a valid URL.
	 *
	 * New in Zulip 10.0 (feature level 285).
	 */
	filename: string;
};

export interface CheckThumbnailStatusParams {
	/**
	 * The realm ID component of the file's `path_id`. If the `path_id` is
	 * `1/4e/m2A3MSqFnWRLUf9SaPzQ0Up_/zulip.txt`, the `realm_id_str` would be `1`.
	 */
	realm_id_str: number;
	/**
	 * The file path component of the file's `path_id` (everything
	 * after the first `/`). If the `path_id` is
	 * `1/4e/m2A3MSqFnWRLUf9SaPzQ0Up_/zulip.txt`, the `filename`
	 * would be `4e/m2A3MSqFnWRLUf9SaPzQ0Up_/zulip.txt`.
	 */
	filename: string;
}

export type CheckThumbnailStatusResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** A boolean indicating whether the thumbnail exists. */
	has_thumbnail: boolean;
};

export interface GetFileTemporaryUrlParams {
	/**
	 * The realm ID component of the file's `path_id`. If the `path_id` is
	 * `1/4e/m2A3MSqFnWRLUf9SaPzQ0Up_/zulip.txt`, the `realm_id_str` would be `1`.
	 */
	realm_id_str: number;
	/**
	 * The file path component of the file's `path_id` (everything
	 * after the first `/`). If the `path_id` is
	 * `1/4e/m2A3MSqFnWRLUf9SaPzQ0Up_/zulip.txt`, the `filename`
	 * would be `4e/m2A3MSqFnWRLUf9SaPzQ0Up_/zulip.txt`.
	 */
	filename: string;
}

export type GetFileTemporaryUrlResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * A temporary URL that can be used to access the uploaded file
	 * without Zulip's normal API authentication.
	 */
	url: string;
};

export interface GetUsersParams {
	/**
	 * Whether the client supports computing gravatars URLs. If
	 * enabled, `avatar_url` will be included in the response only
	 * if there is a Zulip avatar, and will be `null` for users who
	 * are using gravatar as their avatar. This option
	 * significantly reduces the compressed size of user data,
	 * since gravatar URLs are long, random strings and thus do not
	 * compress well. The `client_gravatar` field is set to `true` if
	 * clients can compute their own gravatars.
	 */
	client_gravatar?: boolean;
	/**
	 * Whether the client wants [custom profile field](https://zulip.com/help/custom-profile-fields)
	 * data to be included in the response.
	 */
	include_custom_profile_fields?: boolean;
	/**
	 * Limits the results to the specified user IDs. If not
	 * provided, the server will return all accessible users in
	 * the organization.
	 *
	 * New in Zulip 11.0 (feature level 384).
	 */
	user_ids?: number[];
}

export type GetUsersResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * A list of `user` objects, each containing details about a user in the
	 * organization.
	 */
	members: User[];
};

export interface CreateUserParams {
	/** The email address of the new user. */
	email: string;
	/** The password of the new user. */
	password: string;
	/** The full name of the new user. */
	full_name: string;
}

export type CreateUserResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * The ID assigned to the newly created user.
	 *
	 * New in Zulip 4.0 (feature level 30).
	 */
	user_id: number;
};

export interface ReactivateUserParams {
	/** The target user's ID. */
	user_id: number;
}

export type ReactivateUserResponse = JsonSuccess;

export interface UpdateStatusForUserParams {
	/** The target user's ID. */
	user_id: number;
	/**
	 * The text content of the status message. Sending the empty string
	 * will clear the user's status.
	 */
	status_text?: string;
	/**
	 * The name for the emoji to associate with this status.
	 *
	 * New in Zulip 5.0 (feature level 86).
	 */
	emoji_name?: string;
	/**
	 * A unique identifier, defining the specific emoji codepoint requested,
	 * within the namespace of the `reaction_type`.
	 *
	 * New in Zulip 5.0 (feature level 86).
	 */
	emoji_code?: string;
	/**
	 * A string indicating the type of emoji. Each emoji `reaction_type`
	 * has an independent namespace for values of `emoji_code`.
	 *
	 * New in Zulip 5.0 (feature level 86).
	 */
	reaction_type?: string;
}

export type UpdateStatusForUserResponse = JsonSuccess;

export interface GetUserStatusParams {
	/** The target user's ID. */
	user_id: number;
}

export type GetUserStatusResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	status: UserStatus;
};

export interface GetUserPresenceParams {
	/**
	 * The ID or Zulip API email address of the user whose presence you want to fetch.
	 *
	 * New in Zulip 4.0 (feature level 43).
	 */
	user_id_or_email: string;
}

export type GetUserPresenceResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * The time when the server fetched the `presence` data
	 * included in the response. Matches the similar field
	 * in other presence responses.
	 *
	 * New in Zulip 12.0 (feature level 497).
	 */
	server_timestamp: number;
	/** An object containing the presence details for the user. */
	presence: {
		/**
		 * The UNIX timestamp of the last time a client connected
		 * to Zulip reported that the user was actually present.
		 */
		active_timestamp?: number;
		/**
		 * The UNIX timestamp of the last time the user had a
		 * client connected to Zulip, including idle clients.
		 */
		idle_timestamp?: number;
		/**
		 * Presence details for the user in the legacy format.
		 * Starting with Zulip 7.0 (feature level 178), the
		 * `website` and `aggregated` dictionaries always contain
		 * identical data, since the server no longer stores which
		 * client submitted presence updates.
		 */
		website: {
			/**
			 * The status of the user. Will be either `"idle"` or
			 * `"active"`.
			 */
			status: "idle" | "active";
			/**
			 * The UNIX timestamp of when the user's presence data
			 * was last updated.
			 */
			timestamp: number;
		};
		/**
		 * Presence details for the user in the legacy format.
		 * Unlike `website`, the `status` will be `"offline"` if
		 * the most recent presence update is older than the
		 * server's offline threshold.
		 */
		aggregated: {
			/**
			 * The status of the user. Will be either `"idle"`,
			 * `"active"`, or `"offline"`.
			 */
			status: "idle" | "active" | "offline";
			/**
			 * The UNIX timestamp of when the user's presence data
			 * was last updated.
			 */
			timestamp: number;
		};
	};
};

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetOwnUserParams = {};

export type GetOwnUserResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** URL for the requesting user's avatar. */
	avatar_url: string;
	/**
	 * Version for the requesting user's avatar. Used for cache-busting requests
	 * for the user's avatar. Clients generally shouldn't need to use this;
	 * most avatar URLs sent by Zulip will already end with `?v={avatar_version}`.
	 *
	 * New in Zulip 3.0 (feature level 10).
	 */
	avatar_version: number;
	/** Zulip API email of the requesting user. */
	email: string;
	/** Full name of the requesting user. */
	full_name: string;
	/** A boolean indicating if the requesting user is an admin. */
	is_admin: boolean;
	/**
	 * A boolean indicating if the requesting user is
	 * an organization owner.
	 *
	 * New in Zulip 3.0 (feature level 8).
	 */
	is_owner: boolean;
	/**
	 * - 100 = Organization owner
	 * - 200 = Organization administrator
	 * - 300 = Organization moderator
	 * - 400 = Member
	 * - 600 = Guest
	 *
	 * New in Zulip 4.0 (feature level 59).
	 */
	role: 100 | 200 | 300 | 400 | 600;
	/**
	 * A boolean indicating if the requesting user is a guest.
	 *
	 * New in Zulip 3.0 (feature level 10).
	 */
	is_guest: boolean;
	/** A boolean indicating if the requesting user is a bot. */
	is_bot: boolean;
	/**
	 * A boolean specifying whether the requesting user account
	 * has been deactivated.
	 *
	 * New in Zulip 3.0 (feature level 10).
	 */
	is_active: boolean;
	/**
	 * The IANA identifier of the requesting user's [profile time zone](https://zulip.com/help/change-your-timezone),
	 * which is used primarily to display the user's local time to other users.
	 *
	 * New in Zulip 3.0 (feature level 10).
	 */
	timezone: string;
	/**
	 * The time when the user joined. For users imported from other
	 * applications and users created via the API, this is set to the
	 * account creation time until the user logs in for the first time,
	 * after which it is updated to that login time.
	 *
	 * New in Zulip 3.0 (feature level 10).
	 */
	date_joined: string;
	/**
	 * The integer ID of the last message received by the requesting
	 * user's account.
	 * @deprecated
	 */
	max_message_id: number;
	/** The user's ID. */
	user_id: number;
	/** The requesting user's real email address. */
	delivery_email?: string;
	/**
	 * Indicates whether this user object is a stub account imported from
	 * another chat system. Stub accounts are used to represent the senders
	 * for imported messages. Stub accounts can be converted to regular Zulip
	 * accounts when the user starts using Zulip, preserving that imported
	 * user's message history.
	 *
	 * New in Zulip 12.0 (feature level 433).
	 */
	is_imported_stub: boolean;
	/** Only present if `is_bot` is false; bots can't have custom profile fields. */
	profile_data?: ProfileData;
};

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type DeactivateOwnUserParams = {};

export type DeactivateOwnUserResponse = JsonSuccess;

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type RegenerateApiKeyParams = {};

export type RegenerateApiKeyResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The new API key for the user. */
	api_key: string;
};

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetAlertWordsParams = {};

export type GetAlertWordsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * An array of strings, where each string is an alert word (or phrase)
	 * configured by the user.
	 */
	alert_words: string[];
};

export interface AddAlertWordsParams {
	/**
	 * An array of strings to be added to the user's set of configured
	 * alert words. Strings already present in the user's set of alert words
	 * already are ignored.
	 */
	alert_words: string[];
}

export type AddAlertWordsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * An array of strings, where each string is an alert word (or phrase)
	 * configured by the user.
	 */
	alert_words: string[];
};

export interface RemoveAlertWordsParams {
	/**
	 * An array of strings to be removed from the user's set of configured
	 * alert words. Strings that are not in the user's set of alert words
	 * are ignored.
	 */
	alert_words: string[];
}

export type RemoveAlertWordsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * An array of strings, where each string is an alert word (or phrase)
	 * configured by the user.
	 */
	alert_words: string[];
};

export interface UpdatePresenceParams {
	/**
	 * The identifier that specifies what presence data the client already
	 * has received, which allows the server to only return more recent
	 * user presence data.
	 *
	 * New in Zulip 9.0 (feature level 263).
	 */
	last_update_id?: number;
	/**
	 * Limits how far back in time to fetch user presence data. If not specified,
	 * defaults to 14 days. A value of N means that the oldest presence data
	 * fetched will be from at most N days ago.
	 *
	 * New in Zulip 10.0 (feature level 288).
	 */
	history_limit_days?: number;
	/**
	 * Whether the user has interacted with the client (e.g. moved the mouse,
	 * used the keyboard, etc.) since the previous presence request from this
	 * client.
	 */
	new_user_input?: boolean;
	/**
	 * Whether the client is sending a ping-only request, meaning it only
	 * wants to update the user's presence `status` on the server.
	 */
	ping_only?: boolean;
	/**
	 * Legacy parameter for configuring the format (modern or legacy) in
	 * which the server will return user presence data for the organization.
	 * @deprecated
	 */
	slim_presence?: boolean;
	/** The status of the user on this client. */
	status: "idle" | "active";
}

export type UpdatePresenceResponse = JsonSuccessBase & {
	result: unknown;
	msg: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * The identifier for the latest user presence data returned in
	 * the `presences` data of the response.
	 *
	 * New in Zulip 9.0 (feature level 263).
	 */
	presence_last_update_id?: number;
	/** Only present if `ping_only` is `false`. */
	server_timestamp?: number;
	/** Only present if `ping_only` is `false`. */
	presences?: Record<string, ModernPresenceFormat | Record<string, LegacyPresenceFormat>>;
};

export interface UpdateProfileDataParams {
	/**
	 * An array of objects describing updates to the custom profile
	 * field data for the user.
	 */
	data: ProfileDataUpdate[];
}

export type UpdateProfileDataResponse = JsonSuccess;

export interface RemoveProfileDataParams {
	/**
	 * An array of custom profile field IDs to remove any data set for
	 * the user.
	 */
	data: number[];
}

export type RemoveProfileDataResponse = JsonSuccess;

export interface UpdateStatusParams {
	/**
	 * The text content of the status message. Sending the empty string
	 * will clear the user's status.
	 */
	status_text?: string;
	/**
	 * Whether the user should be marked as "away".
	 * @deprecated
	 */
	away?: boolean;
	/**
	 * The name for the emoji to associate with this status.
	 *
	 * New in Zulip 5.0 (feature level 86).
	 */
	emoji_name?: string;
	/**
	 * A unique identifier, defining the specific emoji codepoint requested,
	 * within the namespace of the `reaction_type`.
	 *
	 * New in Zulip 5.0 (feature level 86).
	 */
	emoji_code?: string;
	/**
	 * A string indicating the type of emoji. Each emoji `reaction_type`
	 * has an independent namespace for values of `emoji_code`.
	 *
	 * New in Zulip 5.0 (feature level 86).
	 */
	reaction_type?: string;
}

export type UpdateStatusResponse = JsonSuccess;

export interface GetStreamTopicsParams {
	/** The ID of the channel to access. */
	stream_id: number;
	/**
	 * Whether the client supports processing the empty string as
	 * a topic name in the returned data.
	 *
	 * New in Zulip 10.0 (feature level 334).
	 */
	allow_empty_topic_name?: boolean;
}

export type GetStreamTopicsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * An array of objects with information about user-accessible
	 * topics in the specified channel, sorted by recency (i.e.,
	 * the topic with the most recent message is ordered first).
	 */
	topics: {
		/** The message ID of the last message sent to this topic. */
		max_id: number;
		/** The name of the topic. */
		name: string;
	}[];
};

export interface GetSubscriptionsParams {
	/**
	 * Whether each returned channel object should include a `subscribers`
	 * field containing a list of the user IDs of its subscribers.
	 */
	include_subscribers?: "true" | "false" | "partial";
}

export type GetSubscriptionsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * A list of dictionaries where each dictionary contains
	 * information about one of the subscribed channels.
	 */
	subscriptions: Subscription[];
};

export interface SubscribeParams {
	/**
	 * A list of dictionaries containing the key `name` and value
	 * specifying the name of the channel to subscribe. If the channel does not
	 * exist a new channel is created. The description of the channel created can
	 * be specified by setting the dictionary key `description` with an
	 * appropriate value.
	 */
	subscriptions: {
		/** The name of the channel. */
		name: string;
		/**
		 * The [description](https://zulip.com/help/change-the-channel-description)
		 * to use for a new channel being created, in text/markdown format.
		 */
		description?: string;
	}[];
	/**
	 * A list of user IDs (preferred) or Zulip API email
	 * addresses of the users to be subscribed to or unsubscribed
	 * from the channels specified in the `subscriptions` parameter. If
	 * not provided, then the requesting user/bot is subscribed.
	 */
	principals?: Principals;
	/**
	 * A boolean specifying whether authorization errors (such as when the
	 * requesting user is not authorized to access a private channel) should be
	 * considered fatal or not. When `true`, an authorization error is reported
	 * as such. When set to `false`, the response will be a 200 and any channels
	 * where the request encountered an authorization error will be listed
	 * in the `unauthorized` key.
	 */
	authorization_errors_fatal?: boolean;
	/**
	 * If one of the channels specified did not exist previously and is thus created
	 * by this call, this determines whether [notification bot](https://zulip.com/help/configure-automated-notices)
	 * will send an announcement about the new channel's creation.
	 */
	announce?: boolean;
	/**
	 * As described above, this endpoint will create a new channel if passed
	 * a channel name that doesn't already exist. This parameters and the ones
	 * that follow are used to request an initial configuration of a created
	 * channel; they are ignored for channels that already exist.
	 */
	invite_only?: boolean;
	/**
	 * This parameter determines whether any newly created channels will be
	 * web-public channels.
	 *
	 * New in Zulip 5.0 (feature level 98).
	 */
	is_web_public?: boolean;
	/**
	 * This parameter determines whether any newly created channels will be
	 * added as [default channels][default-channels] for new users joining
	 * the organization.
	 *
	 * New in Zulip 8.0 (feature level 200).
	 */
	is_default_stream?: boolean;
	/**
	 * Whether the channel's message history should be available to
	 * newly subscribed members, or users can only access messages
	 * they actually received while subscribed to the channel.
	 */
	history_public_to_subscribers?: HistoryPublicToSubscribers;
	/**
	 * Number of days that messages sent to this channel will be stored
	 * before being automatically deleted by the [message retention
	 * policy](https://zulip.com/help/message-retention-policy). Two special string format
	 * values are supported:
	 *
	 * New in Zulip 3.0 (feature level 17).
	 */
	message_retention_days?: MessageRetentionDays;
	/**
	 * Whether [named topics](https://zulip.com/help/introduction-to-topics) and the empty
	 * topic (i.e., ["general chat" topic](https://zulip.com/help/general-chat-topic))
	 * are enabled in this channel.
	 *
	 * New in Zulip 11.0 (feature level 392).
	 */
	topics_policy?: TopicsPolicy;
	can_add_subscribers_group?: ChannelCanAddSubscribersGroup;
	can_remove_subscribers_group?: CanRemoveSubscribersGroup;
	can_administer_channel_group?: CanAdministerChannelGroup;
	can_delete_any_message_group?: CanDeleteAnyMessageGroup;
	can_delete_own_message_group?: CanDeleteOwnMessageGroup;
	can_move_messages_out_of_channel_group?: CanMoveMessagesOutOfChannelGroup;
	can_move_messages_within_channel_group?: CanMoveMessagesWithinChannelGroup;
	can_send_message_group?: CanSendMessageGroup;
	can_subscribe_group?: CanSubscribeGroup;
	can_resolve_topics_group?: CanResolveTopicsGroup;
	can_create_topic_group?: CanCreateTopicGroup;
	/**
	 * This parameter adds the newly created channel to the specified
	 * [channel folder](https://zulip.com/help/channel-folders).
	 *
	 * New in Zulip 11.0 (feature level 389).
	 */
	folder_id?: number;
	/**
	 * Whether any other users newly subscribed via this request should be
	 * sent a direct message, from Notification Bot, notifying them about their
	 * new subscription.
	 */
	send_new_subscription_messages?: SendNewSubscriptionMessages;
}

export type SubscribeResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * A dictionary where the key is the ID of the user and the value
	 * is a list of the names of the channels that user was subscribed
	 * to as a result of the request.
	 */
	subscribed: Record<string, string[]>;
	/**
	 * A dictionary where the key is the ID of the user and the value
	 * is a list of the names of the channels that where the user was
	 * not added as a subscriber in this request, because they were
	 * already a subscriber.
	 */
	already_subscribed: Record<string, string[]>;
	/**
	 * A list of names of channels that the requesting user/bot was not
	 * authorized to subscribe to. Only present if `"authorization_errors_fatal": false`.
	 */
	unauthorized?: string[];
	/**
	 * Only present if the parameter `send_new_subscription_messages`
	 * in the request was `true`.
	 *
	 * New in Zulip 11.0 (feature level 397).
	 */
	new_subscription_messages_sent?: boolean;
};

export interface UpdateSubscriptionsParams {
	/** A list of channel names to unsubscribe from. */
	delete?: string[];
	/**
	 * A list of objects describing which channels to subscribe to, optionally
	 * including per-user subscription parameters (e.g. color) and if the
	 * channel is to be created, its description.
	 */
	add?: {
		name?: string;
		color?: string;
		description?: string;
	}[];
}

export type UpdateSubscriptionsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * A dictionary where the key is the Zulip API email
	 * address of the user/bot and the value is a
	 * list of the names of the channels that were
	 * subscribed to as a result of the query.
	 */
	subscribed: Record<string, string[]>;
	/**
	 * A dictionary where the key is the Zulip API email
	 * address of the user/bot and the value is a
	 * list of the names of the channels that the
	 * user/bot is already subscribed to.
	 */
	already_subscribed: Record<string, string[]>;
	/**
	 * A list of the names of channels that the user
	 * is already unsubscribed from, and hence
	 * doesn't need to be unsubscribed.
	 */
	not_removed?: string[];
	/**
	 * A list of the names of channels which were unsubscribed
	 * from as a result of the query.
	 */
	removed: string[];
	/**
	 * Only present if the parameter `send_new_subscription_messages`
	 * in the request was `true`.
	 *
	 * New in Zulip 11.0 (feature level 397).
	 */
	new_subscription_messages_sent?: boolean;
};

export interface UnsubscribeParams {
	/**
	 * A list of channel names to unsubscribe from. This parameter is called
	 * `streams` in our Python API.
	 */
	subscriptions: string[];
	/**
	 * A list of user IDs (preferred) or Zulip API email
	 * addresses of the users to be subscribed to or unsubscribed
	 * from the channels specified in the `subscriptions` parameter. If
	 * not provided, then the requesting user/bot is subscribed.
	 */
	principals?: Principals;
}

export type UnsubscribeResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * A list of the names of channels that the user is already unsubscribed
	 * from, and hence doesn't need to be unsubscribed.
	 */
	not_removed: string[];
	/**
	 * A list of the names of channels which were unsubscribed from as a result
	 * of the query.
	 */
	removed: string[];
};

export interface MuteTopicParams {
	/** The ID of the channel to access. */
	stream_id?: number;
	/** The name of the channel to access. */
	stream?: string;
	/**
	 * The topic to (un)mute. Note that the request will succeed regardless of
	 * whether any messages have been sent to the specified topic.
	 */
	topic: string;
	/** Whether to mute (`add`) or unmute (`remove`) the provided topic. */
	op: "add" | "remove";
}

export type MuteTopicResponse = JsonSuccess;

export interface TestNotifyParams {
	/** The push token for the device to which to send the test notification. */
	token?: string;
}

export type TestNotifyResponse = JsonSuccess;

export interface E2eeTestNotifyParams {
	/**
	 * The ID for the device to which to send the test notification.
	 *
	 * New in Zulip 12.0 (feature level 468).
	 */
	device_id?: number;
}

export type E2eeTestNotifyResponse = JsonSuccess;

export interface RegisterPushDeviceParams {
	/** The ID of the device to configure for push notifications. */
	device_id: number;
	/**
	 * A random unsigned 32-bit integer generated by the client as an identifier
	 * for `push_key`. It will be included in mobile push notifications
	 * along with encrypted payloads to identify the `push_key` to decrypt.
	 */
	push_key_id?: number;
	/**
	 * Key that the client would like the server to use to encrypt notifications,
	 * encoded with Base64.
	 *
	 * New in Zulip 12.0 (feature level 432).
	 */
	push_key?: string;
	/** Whether the token was generated by FCM or APNs. */
	token_kind?: "fcm" | "apns";
	/**
	 * Identifier for the FCM/APNs provided token to the device,
	 * produced by taking the first 8 bytes of the SHA-256 hash of
	 * the token, then encoding those bytes using standard Base64 encoding
	 * as defined in RFC 4648.
	 */
	token_id?: string;
	/**
	 * Which of the bouncer's public keys the client used to encrypt the
	 * `PushRegistration` dictionary.
	 */
	bouncer_public_key?: string;
	/**
	 * Ciphertext generated by encrypting a `PushRegistration` dictionary
	 * using the `bouncer_public_key`, encoded using a RFC 4648 standard
	 * base64 encoder.
	 */
	encrypted_push_registration?: string;
}

export type RegisterPushDeviceResponse = JsonSuccess;

export interface RegisterRemotePushDeviceParams {
	/**
	 * The UUID of the realm to which the push device
	 * being registered belongs.
	 */
	realm_uuid: string;
	/**
	 * The `token_id` value provided by the mobile client
	 * to [register E2EE push device](https://zulip.com/api/register-push-device).
	 *
	 * New in Zulip 12.0 (feature level 468).
	 */
	token_id: string;
	/**
	 * The `encrypted_push_registration` value provided by the mobile client
	 * to [register E2EE push device](https://zulip.com/api/register-push-device).
	 */
	encrypted_push_registration: string;
	/**
	 * The `bouncer_public_key` value provided by the mobile client
	 * to [register E2EE push device](https://zulip.com/api/register-push-device).
	 */
	bouncer_public_key: string;
}

export type RegisterRemotePushDeviceResponse = JsonSuccess;

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type RegisterClientDeviceParams = {};

export type RegisterClientDeviceResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The ID of the newly registered device. */
	device_id: number;
};

export interface RemoveClientDeviceParams {
	/** The ID of the device to remove. */
	device_id: number;
}

export type RemoveClientDeviceResponse = JsonSuccess;

export interface UpdateUserTopicParams {
	/** The ID of the channel to access. */
	stream_id: number;
	/**
	 * The topic for which the personal preferences needs to be updated.
	 * Note that the request will succeed regardless of whether
	 * any messages have been sent to the specified topic.
	 */
	topic: string;
	/** Controls which visibility policy to set. */
	visibility_policy: 0 | 1 | 2 | 3;
}

export type UpdateUserTopicResponse = JsonSuccess;

export interface MuteUserParams {
	/** The ID of the user to mute/unmute. */
	muted_user_id: number;
}

export type MuteUserResponse = JsonSuccess;

export interface UnmuteUserParams {
	/** The ID of the user to mute/unmute. */
	muted_user_id: number;
}

export type UnmuteUserResponse = JsonSuccess;

export interface AddApnsTokenParams {
	/** The token provided by the device. */
	token: string;
	/** The ID of the Zulip app that is making the request. */
	appid: string;
}

export type AddApnsTokenResponse = JsonSuccess;

export interface RemoveApnsTokenParams {
	/** The token provided by the device. */
	token: string;
}

export type RemoveApnsTokenResponse = JsonSuccess;

export interface AddFcmTokenParams {
	/** The token provided by the device. */
	token: string;
}

export type AddFcmTokenResponse = JsonSuccess;

export interface RemoveFcmTokenParams {
	/** The token provided by the device. */
	token: string;
}

export type RemoveFcmTokenResponse = JsonSuccess;

export interface GetSubscriptionStatusParams {
	/** The target user's ID. */
	user_id: number;
	/** The ID of the channel to access. */
	stream_id: number;
}

export type GetSubscriptionStatusResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** Whether the user is subscribed to the channel. */
	is_subscribed: boolean;
};

export interface GetUserChannelsParams {
	/** The target user's ID. */
	user_id: number;
}

export type GetUserChannelsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * IDs of the channels that the target user is subscribed to
	 * (limited by the acting user's permissions to view subscribers).
	 */
	subscribed_channel_ids: number[];
};

export interface UploadCustomEmojiParams {
	/**
	 * The name that should be associated with the uploaded emoji image/gif.
	 * The emoji name can only contain letters, numbers, dashes, and spaces.
	 * Upper and lower case letters are treated the same, and underscores (\_)
	 * are treated the same as spaces (consistent with how the Zulip UI
	 * handles emoji).
	 */
	emoji_name: string;
	filename?: Blob;
}

export type UploadCustomEmojiResponse = JsonSuccess;

export interface DeactivateCustomEmojiParams {
	/** The name of the custom emoji to deactivate. */
	emoji_name: string;
}

export type DeactivateCustomEmojiResponse = JsonSuccess;

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetCustomEmojiParams = {};

export type GetCustomEmojiResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * An object in which keys are RealmEmoji ids, and the
	 * values describe the custom emoji for that id.
	 */
	emoji: Record<string, RealmEmoji>;
};

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetPresenceParams = {};

export type GetPresenceResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * The time when the server fetched the `presences` data included
	 * in the response.
	 */
	server_timestamp: number;
	/**
	 * A dictionary where each entry describes the presence details
	 * of a user in the Zulip organization.
	 */
	presences: Record<string, Record<string, LegacyPresenceFormat>>;
};

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetRealmDomainsParams = {};

export type GetRealmDomainsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * A list of objects containing details of each domain allowed
	 * for user account email addresses.
	 */
	domains: RealmDomain[];
};

export interface AddRealmDomainParams {
	/** The new domain. */
	domain: string;
	/** Whether subdomains are allowed for this domain. */
	allow_subdomains: boolean;
}

export type AddRealmDomainResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * An array containing the ID of the newly added domain
	 * and the submitted domain name string.
	 */
	new_domain: (number | string)[];
};

export interface PatchRealmDomainParams {
	/** The domain to update. */
	domain: string;
	/** Whether subdomains are allowed for this domain. */
	allow_subdomains: boolean;
}

export type PatchRealmDomainResponse = JsonSuccess;

export interface DeleteRealmDomainParams {
	/** The domain to remove. */
	domain: string;
}

export type DeleteRealmDomainResponse = JsonSuccess;

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetCustomProfileFieldsParams = {};

export type GetCustomProfileFieldsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * An array containing all the custom profile fields defined in this
	 * Zulip organization.
	 */
	custom_fields: CustomProfileField[];
};

export interface ReorderCustomProfileFieldsParams {
	/**
	 * A list of the IDs of all the custom profile fields defined in this
	 * organization, in the desired new order.
	 */
	order: number[];
}

export type ReorderCustomProfileFieldsResponse = JsonSuccess;

export interface CreateCustomProfileFieldParams {
	/**
	 * The name of the custom profile field, which will appear both in
	 * user-facing settings UI for configuring custom profile fields and
	 * in UI displaying a user's profile.
	 */
	name?: string;
	/**
	 * The help text to be displayed for the custom profile field in user-facing
	 * settings UI for configuring custom profile fields.
	 */
	hint?: string;
	/**
	 * The field type can be any of the supported custom profile field types. See the
	 * [custom profile fields documentation](https://zulip.com/help/custom-profile-fields)
	 * for more details on what each type means.
	 */
	field_type: number;
	/**
	 * Field types 3 (Dropdown) and 7 (External account) support storing
	 * additional configuration for the field type in the `field_data` attribute.
	 */
	field_data?: Record<string, unknown>;
	/**
	 * Whether clients should display this profile field in a summary section of a
	 * user's profile (or in a more easily accessible "small profile").
	 *
	 * New in Zulip 6.0 (feature level 146).
	 */
	display_in_profile_summary?: boolean;
	/**
	 * Whether an organization administrator has configured this profile field as
	 * required.
	 *
	 * New in Zulip 9.0 (feature level 244).
	 */
	required?: boolean;
	/**
	 * Whether regular users can edit this profile field on their own account.
	 *
	 * New in Zulip 10.0 (feature level 296).
	 */
	editable_by_user?: boolean;
	/**
	 * Whether this custom profile field should be used to match users in typeahead
	 * suggestions. Only allowed for Short Text and External Account
	 * [profile field types](https://zulip.com/help/custom-profile-fields#profile-field-types).
	 *
	 * New in Zulip 12.0 (feature level 455).
	 */
	use_for_user_matching?: boolean;
}

export type CreateCustomProfileFieldResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The ID for the custom profile field. */
	id: number;
};

export interface UpdateRealmUserSettingsDefaultsParams {
	/**
	 * Whether clients should display the [number of starred
	 * messages](https://zulip.com/help/star-a-message#display-the-number-of-starred-messages).
	 */
	starred_message_counts?: boolean;
	/**
	 * Whether the user is configured to receive typing notifications from other users.
	 * The server will only deliver typing notifications events to users who for whom this
	 * is enabled.
	 *
	 * New in Zulip 9.0 (feature level 253).
	 */
	receives_typing_notifications?: boolean;
	/**
	 * Whether the user should be shown an alert, offering to update their
	 * [profile time zone](https://zulip.com/help/change-your-timezone), when the time displayed
	 * for the profile time zone differs from the current time displayed by the
	 * time zone configured on their device.
	 *
	 * New in Zulip 10.0 (feature level 329).
	 */
	web_suggest_update_timezone?: boolean;
	/**
	 * Whether to use the [maximum available screen width](https://zulip.com/help/enable-full-width-display)
	 * for the web app's center panel (message feed, recent conversations) on wide screens.
	 */
	fluid_layout_width?: boolean;
	/**
	 * This setting is reserved for use to control variations in Zulip's design
	 * to help visually impaired users.
	 */
	high_contrast_mode?: boolean;
	/**
	 * Whether or not to mark messages as read when the user scrolls through their
	 * feed.
	 *
	 * New in Zulip 7.0 (feature level 175).
	 */
	web_mark_read_on_scroll_policy?: 1 | 2 | 3;
	/**
	 * Web/desktop app setting controlling the default navigation
	 * behavior when clicking on a channel link.
	 *
	 * New in Zulip 9.0 (feature level 269).
	 */
	web_channel_default_view?: 1 | 2 | 3 | 4;
	/**
	 * User-configured primary `font-size` for the web application, in pixels.
	 *
	 * New in Zulip 9.0 (feature level 245).
	 */
	web_font_size_px?: number;
	/**
	 * User-configured primary `line-height` for the web application, in percent, so a
	 * value of 120 represents a `line-height` of 1.2.
	 *
	 * New in Zulip 9.0 (feature level 245).
	 */
	web_line_height_percent?: number;
	/** Controls which [color theme](https://zulip.com/help/dark-theme) to use. */
	color_scheme?: 1 | 2 | 3;
	/**
	 * A boolean parameter to control whether synchronizing drafts is enabled for
	 * the user. When synchronization is disabled, all drafts stored in the server
	 * will be automatically deleted from the server.
	 */
	enable_drafts_synchronization?: boolean;
	/**
	 * Whether to [translate emoticons to emoji](https://zulip.com/help/configure-emoticon-translations)
	 * in messages the user sends.
	 */
	translate_emoticons?: boolean;
	/**
	 * Whether to display the names of reacting users on a message.
	 *
	 * New in Zulip 6.0 (feature level 125).
	 */
	display_emoji_reaction_users?: boolean;
	/**
	 * The [home view](https://zulip.com/help/configure-home-view) used when opening a new
	 * Zulip web app window or hitting the `Esc` keyboard shortcut repeatedly.
	 *
	 * New in Zulip 8.0 (feature level 219).
	 */
	web_home_view?: string;
	/**
	 * Whether the escape key navigates to the
	 * [configured home view](https://zulip.com/help/configure-home-view).
	 *
	 * New in Zulip 8.0 (feature level 219).
	 */
	web_escape_navigates_to_home_view?: boolean;
	/** Whether the users list on left sidebar in narrow windows. */
	left_side_userlist?: boolean;
	/**
	 * The user's configured [emoji set](https://zulip.com/help/emoji-and-emoticons#use-emoticons),
	 * used to display emoji to the user everywhere they appear in the UI.
	 */
	emojiset?: string;
	/** Whether to [hide inactive channels](https://zulip.com/help/manage-inactive-channels) in the left sidebar. */
	demote_inactive_streams?: 1 | 2 | 3;
	/**
	 * The style selected by the user for the right sidebar user list.
	 *
	 * New in Zulip 6.0 (feature level 141).
	 */
	user_list_style?: 1 | 2 | 3;
	/**
	 * Controls how animated images should be played in the message feed in the web/desktop application.
	 *
	 * New in Zulip 9.0 (feature level 275).
	 */
	web_animate_image_previews?: "always" | "on_hover" | "never";
	/**
	 * Configuration for which channels should be displayed with a numeric unread count in the left sidebar.
	 * Channels that do not have an unread count will have a simple dot indicator for whether there are any
	 * unread messages.
	 *
	 * New in Zulip 8.0 (feature level 210).
	 */
	web_stream_unreads_count_display_policy?: 1 | 2 | 3;
	/**
	 * Controls whether user wants AI features like topic summarization to
	 * be hidden in all Zulip clients.
	 *
	 * New in Zulip 10.0 (feature level 350).
	 */
	hide_ai_features?: boolean;
	/**
	 * Determines whether [channel folders](https://zulip.com/help/channel-folders)
	 * are used to organize how conversations with unread messages
	 * are displayed in the web/desktop application's Inbox view.
	 *
	 * New in Zulip 12.0 (feature level 431).
	 */
	web_inbox_show_channel_folders?: boolean;
	/**
	 * Determines whether [channel folders](https://zulip.com/help/channel-folders)
	 * are used to organize how channels are displayed in the
	 * web/desktop application's left sidebar.
	 *
	 * New in Zulip 11.0 (feature level 411).
	 */
	web_left_sidebar_show_channel_folders?: boolean;
	/**
	 * Determines whether the web/desktop application's left sidebar displays
	 * the unread message count summary.
	 *
	 * New in Zulip 11.0 (feature level 398).
	 */
	web_left_sidebar_unreads_count_summary?: boolean;
	/** Enable visual desktop notifications for channel messages. */
	enable_stream_desktop_notifications?: boolean;
	/** Enable email notifications for channel messages. */
	enable_stream_email_notifications?: boolean;
	/** Enable mobile notifications for channel messages. */
	enable_stream_push_notifications?: boolean;
	/** Enable audible desktop notifications for channel messages. */
	enable_stream_audible_notifications?: boolean;
	/** Notification sound name. */
	notification_sound?: string;
	/** Enable visual desktop notifications for direct messages and @-mentions. */
	enable_desktop_notifications?: boolean;
	/**
	 * Enable audible desktop notifications for direct messages and
	 * @-mentions.
	 */
	enable_sounds?: boolean;
	/**
	 * Enable visual desktop notifications for messages sent to followed topics.
	 *
	 * New in Zulip 8.0 (feature level 189).
	 */
	enable_followed_topic_desktop_notifications?: boolean;
	/**
	 * Enable email notifications for messages sent to followed topics.
	 *
	 * New in Zulip 8.0 (feature level 189).
	 */
	enable_followed_topic_email_notifications?: boolean;
	/**
	 * Enable push notifications for messages sent to followed topics.
	 *
	 * New in Zulip 8.0 (feature level 189).
	 */
	enable_followed_topic_push_notifications?: boolean;
	/**
	 * Enable audible desktop notifications for messages sent to followed topics.
	 *
	 * New in Zulip 8.0 (feature level 189).
	 */
	enable_followed_topic_audible_notifications?: boolean;
	/**
	 * The duration (in seconds) for which the server should wait to batch
	 * email notifications before sending them.
	 */
	email_notifications_batching_period_seconds?: number;
	/**
	 * Enable email notifications for direct messages and @-mentions received
	 * when the user is offline.
	 */
	enable_offline_email_notifications?: boolean;
	/**
	 * Enable mobile notification for direct messages and @-mentions received
	 * when the user is offline.
	 */
	enable_offline_push_notifications?: boolean;
	/**
	 * Enable mobile notification for direct messages and @-mentions received
	 * when the user is online.
	 */
	enable_online_push_notifications?: boolean;
	/** Enable digest emails when the user is away. */
	enable_digest_emails?: boolean;
	/** Include the message's content in email notifications for new messages. */
	message_content_in_email_notifications?: boolean;
	/** Include content of direct messages in desktop notifications. */
	pm_content_in_desktop_notifications?: boolean;
	/**
	 * Whether wildcard mentions (E.g. @**all**) should send notifications
	 * like a personal mention.
	 */
	wildcard_mentions_notify?: boolean;
	/**
	 * Whether wildcard mentions (e.g., @**all**) in messages sent to followed topics
	 * should send notifications like a personal mention.
	 *
	 * New in Zulip 8.0 (feature level 189).
	 */
	enable_followed_topic_wildcard_mentions_notify?: boolean;
	/** Unread count badge (appears in desktop sidebar and browser tab) */
	desktop_icon_count_display?: 1 | 2 | 3 | 4;
	/**
	 * Whether to [include organization name in subject of message notification
	 * emails](https://zulip.com/help/email-notifications#include-organization-name-in-subject-line).
	 *
	 * New in Zulip 7.0 (feature level 168).
	 */
	realm_name_in_email_notifications_policy?: 1 | 2 | 3;
	/**
	 * Which [topics to follow automatically](https://zulip.com/help/mute-a-topic).
	 *
	 * New in Zulip 8.0 (feature level 214).
	 */
	automatically_follow_topics_policy?: 1 | 2 | 3 | 4;
	/**
	 * Which [topics to unmute automatically in muted channels](https://zulip.com/help/mute-a-topic).
	 *
	 * New in Zulip 8.0 (feature level 214).
	 */
	automatically_unmute_topics_in_muted_streams_policy?: 1 | 2 | 3 | 4;
	/**
	 * Whether the server will automatically mark the user as following
	 * topics where the user is mentioned.
	 *
	 * New in Zulip 8.0 (feature level 235).
	 */
	automatically_follow_topics_where_mentioned?: boolean;
	/**
	 * Controls whether the resolved-topic notices are marked as read.
	 *
	 * New in Zulip 11.0 (feature level 385).
	 */
	resolved_topic_notice_auto_read_policy?: "always" | "except_followed" | "never";
	/** Display the presence status to other users when online. */
	presence_enabled?: boolean;
	/**
	 * Whether pressing Enter in the compose box sends a message
	 * (or saves a message edit).
	 */
	enter_sends?: boolean;
	/**
	 * Whether time should be [displayed in 24-hour notation](https://zulip.com/help/change-the-time-format).
	 *
	 * New in Zulip 5.0 (feature level 99).
	 */
	twenty_four_hour_time?: boolean;
	/**
	 * Whether [typing notifications](https://zulip.com/help/typing-notifications) be sent when composing
	 * direct messages.
	 *
	 * New in Zulip 5.0 (feature level 105).
	 */
	send_private_typing_notifications?: boolean;
	/**
	 * Whether [typing notifications](https://zulip.com/help/typing-notifications) be sent when composing
	 * channel messages.
	 *
	 * New in Zulip 5.0 (feature level 105).
	 */
	send_stream_typing_notifications?: boolean;
	/**
	 * Whether other users are allowed to see whether you've
	 * read messages.
	 *
	 * New in Zulip 5.0 (feature level 105).
	 */
	send_read_receipts?: boolean;
	/**
	 * The [policy][permission-level] for [which other users][help-email-visibility]
	 * in this organization can see the user's real email address.
	 *
	 * New in Zulip 7.0 (feature level 163).
	 */
	email_address_visibility?: 1 | 2 | 3 | 4 | 5;
	/**
	 * Web/desktop app setting for whether the user's view should
	 * automatically go to the conversation where they sent a message.
	 *
	 * New in Zulip 9.0 (feature level 268).
	 */
	web_navigate_to_sent_message?: boolean;
}

export type UpdateRealmUserSettingsDefaultsResponse = IgnoredParametersSuccess;

export interface UpdateSubscriptionSettingsParams {
	/**
	 * A list of objects that describe the changes that should be applied in
	 * each subscription. Each object represents a subscription, and must have
	 * a `stream_id` key that identifies the channel, as well as the `property`
	 * being modified and its new `value`.
	 */
	subscription_data: {
		/** The unique ID of a channel. */
		stream_id: number;
		/** One of the channel properties described below: */
		property: SubscriptionProperty;
		/** The new value of the property being modified. */
		value: SubscriptionPropertyValue;
	}[];
}

export type UpdateSubscriptionSettingsResponse = IgnoredParametersSuccess;

export interface UpdateSubscriptionPropertyParams {
	/** The ID of the channel to access. */
	stream_id: number;
	/** One of the channel properties described below: */
	property: SubscriptionProperty;
	/** The new value of the property being modified. */
	value: SubscriptionPropertyValue;
}

export type UpdateSubscriptionPropertyResponse = JsonSuccess;

export interface GetUserByEmailParams {
	/** The email address of the user to fetch. Two forms are supported: */
	email: string;
	/**
	 * Whether the client supports computing gravatars URLs. If
	 * enabled, `avatar_url` will be included in the response only
	 * if there is a Zulip avatar, and will be `null` for users who
	 * are using gravatar as their avatar. This option
	 * significantly reduces the compressed size of user data,
	 * since gravatar URLs are long, random strings and thus do not
	 * compress well. The `client_gravatar` field is set to `true` if
	 * clients can compute their own gravatars.
	 */
	client_gravatar?: boolean;
	/**
	 * Whether the client wants [custom profile field](https://zulip.com/help/custom-profile-fields)
	 * data to be included in the response.
	 */
	include_custom_profile_fields?: boolean;
}

export type GetUserByEmailResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	user: User;
};

export interface UpdateUserByEmailParams {
	/**
	 * The email address of the user, specified following the same rules as
	 * [`GET /users/{email}`](https://zulip.com/api/get-user-by-email).
	 */
	email: string;
	/** The user's full name. */
	full_name?: string;
	/**
	 * New [role](https://zulip.com/api/roles-and-permissions) for the user. Roles are encoded as:
	 *
	 * New in Zulip 3.0 (feature level 8).
	 */
	role?: number;
	/**
	 * An array of objects describing updates to the [custom profile
	 * field](https://zulip.com/help/custom-profile-fields) data for the user.
	 */
	profile_data?: ProfileDataUpdate[];
	/**
	 * New email address for the user. Requires the user making the request
	 * to be an organization owner and additionally have the `.can_change_user_emails`
	 * special permission.
	 *
	 * New in Zulip 10.0 (feature level 285).
	 */
	new_email?: string;
}

export type UpdateUserByEmailResponse = JsonSuccess;

export interface GetUserParams {
	/** The target user's ID. */
	user_id: number;
	/**
	 * Whether the client supports computing gravatars URLs. If
	 * enabled, `avatar_url` will be included in the response only
	 * if there is a Zulip avatar, and will be `null` for users who
	 * are using gravatar as their avatar. This option
	 * significantly reduces the compressed size of user data,
	 * since gravatar URLs are long, random strings and thus do not
	 * compress well. The `client_gravatar` field is set to `true` if
	 * clients can compute their own gravatars.
	 */
	client_gravatar?: boolean;
	/**
	 * Whether the client wants [custom profile field](https://zulip.com/help/custom-profile-fields)
	 * data to be included in the response.
	 */
	include_custom_profile_fields?: boolean;
}

export type GetUserResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	user: User;
};

export interface UpdateUserParams {
	/** The target user's ID. */
	user_id: number;
	/** The user's full name. */
	full_name?: string;
	/**
	 * New [role](https://zulip.com/api/roles-and-permissions) for the user. Roles are encoded as:
	 *
	 * New in Zulip 3.0 (feature level 8).
	 */
	role?: number;
	/**
	 * An array of objects describing updates to the [custom profile
	 * field](https://zulip.com/help/custom-profile-fields) data for the user.
	 */
	profile_data?: ProfileDataUpdate[];
	/**
	 * New email address for the user. Requires the user making the request
	 * to be an organization owner and additionally have the `.can_change_user_emails`
	 * special permission.
	 *
	 * New in Zulip 10.0 (feature level 285).
	 */
	new_email?: string;
}

export type UpdateUserResponse = JsonSuccess;

export interface DeactivateUserParams {
	/** The target user's ID. */
	user_id: number;
	/**
	 * Additional actions for the server to perform while deactivating the user.
	 *
	 * New in Zulip 12.0 (feature level 459).
	 */
	actions?: {
		/**
		 * Whether to delete the user's profile by updating their name
		 * to "Deleted user" and removing their profile picture.
		 */
		delete_profile?: boolean;
		/** Whether to delete messages in public channels. */
		delete_public_channel_messages?: boolean;
		/** Whether to delete messages in private channels. */
		delete_private_channel_messages?: boolean;
		/** Whether to delete direct messages. */
		delete_direct_messages?: boolean;
	};
	/**
	 * If not `null`, requests that the deactivated user receive
	 * a notification email about their account deactivation.
	 *
	 * New in Zulip 5.0 (feature level 135).
	 */
	deactivation_notification_comment?: string;
}

export type DeactivateUserResponse = JsonSuccess;

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetLinkifiersParams = {};

export type GetLinkifiersResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * An ordered array of objects, where each object
	 * describes a linkifier.
	 */
	linkifiers: {
		/**
		 * The string regex pattern which represents the pattern that
		 * should be linkified by this linkifier.
		 */
		pattern: string;
		/**
		 * The [RFC 6570](https://www.rfc-editor.org/rfc/rfc6570.html) compliant
		 * URL template to be used for linkifying matches.
		 *
		 * New in Zulip 7.0 (feature level 176).
		 */
		url_template: string;
		/** The ID of the linkifier. */
		id: number;
		/**
		 * An example input string that matches the linkifier's pattern.
		 * This is required for reverse linkifiers.
		 *
		 * New in Zulip 12.0 (feature level 471).
		 */
		example_input: string | null;
		/**
		 * A simple template using `{variable}` for variables that can
		 * be used to generate the Markdown linkifier syntax, given a
		 * URL matching the URL template.
		 *
		 * New in Zulip 12.0 (feature level 471).
		 */
		reverse_template: string | null;
		/**
		 * An array of additional [RFC 6570][rfc6570] compliant URL
		 * template strings that are used for reverse linkification
		 * (converting pasted URLs to linkifier pattern text). These
		 * templates have no effect on forward linkification.
		 */
		alternative_url_templates: string[];
	}[];
};

export interface ReorderLinkifiersParams {
	/**
	 * A list of the IDs of all the linkifiers defined in this
	 * organization, in the desired new order.
	 */
	ordered_linkifier_ids: number[];
}

export type ReorderLinkifiersResponse = JsonSuccess;

export interface AddLinkifierParams {
	/**
	 * The [Python regular
	 * expression](https://docs.python.org/3/howto/regex.html) that should
	 * trigger the linkifier.
	 */
	pattern: LinkifierPattern;
	/**
	 * The [RFC 6570](https://www.rfc-editor.org/rfc/rfc6570.html)
	 * compliant URL template used for the link.
	 * If you used named groups in `pattern`, you can insert their
	 * content here with `{name_of_group}`.
	 *
	 * New in Zulip 7.0 (feature level 176).
	 */
	url_template: LinkifierURLTemplate;
	/**
	 * An example input string that matches the linkifier's pattern.
	 * This is required for reverse linkifiers.
	 *
	 * New in Zulip 12.0 (feature level 471).
	 */
	example_input?: string | null;
	/**
	 * A simple template using `{variable}` for variables that can
	 * be used to generate the Markdown linkifier syntax, given a
	 * URL matching the URL template.
	 *
	 * New in Zulip 12.0 (feature level 471).
	 */
	reverse_template?: string | null;
	/**
	 * An array of additional [RFC 6570][rfc6570] compliant URL
	 * template strings that are used for reverse linkification
	 * (converting pasted URLs to linkifier pattern text). These
	 * templates have no effect on forward linkification.
	 */
	alternative_url_templates?: string[];
}

export type AddLinkifierResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The numeric ID assigned to this filter. */
	id: number;
};

export interface RemoveLinkifierParams {
	/** The ID of the linkifier that you want to remove. */
	filter_id: number;
}

export type RemoveLinkifierResponse = JsonSuccess;

export interface UpdateLinkifierParams {
	/** The ID of the linkifier that you want to update. */
	filter_id: number;
	/**
	 * The [Python regular
	 * expression](https://docs.python.org/3/howto/regex.html) that should
	 * trigger the linkifier.
	 */
	pattern: LinkifierPattern;
	/**
	 * The [RFC 6570](https://www.rfc-editor.org/rfc/rfc6570.html)
	 * compliant URL template used for the link.
	 * If you used named groups in `pattern`, you can insert their
	 * content here with `{name_of_group}`.
	 *
	 * New in Zulip 7.0 (feature level 176).
	 */
	url_template: LinkifierURLTemplate;
	/**
	 * An example input string that matches the linkifier's pattern.
	 * This is required for reverse linkifiers. Passing an empty string
	 * will set this field back to null.
	 *
	 * New in Zulip 12.0 (feature level 471).
	 */
	example_input?: string | null;
	/**
	 * A simple template using `{variable}` for variables that can
	 * be used to generate the Markdown linkifier syntax, given a
	 * URL matching the URL template. Passing an empty string
	 * will set this field back to null.
	 *
	 * New in Zulip 12.0 (feature level 471).
	 */
	reverse_template?: string | null;
	/**
	 * An array of additional [RFC 6570][rfc6570] compliant URL
	 * template strings that are used for reverse linkification
	 * (converting pasted URLs to linkifier pattern text). These
	 * templates have no effect on forward linkification.
	 */
	alternative_url_templates?: string[];
}

export type UpdateLinkifierResponse = JsonSuccess;

export interface AddCodePlaygroundParams {
	/**
	 * The user-visible display name of the playground which can be
	 * used to pick the target playground, especially when multiple
	 * playground options exist for that programming language.
	 */
	name: string;
	/**
	 * The name of the Pygments language lexer for that
	 * programming language.
	 */
	pygments_language: string;
	/**
	 * The [RFC 6570](https://www.rfc-editor.org/rfc/rfc6570.html)
	 * compliant URL template for the playground. The template should
	 * contain exactly one variable named `code`, which determines how the
	 * extracted code should be substituted in the playground URL.
	 *
	 * New in Zulip 8.0 (feature level 196).
	 */
	url_template: string;
}

export type AddCodePlaygroundResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The numeric ID assigned to this playground. */
	id: number;
};

export interface RemoveCodePlaygroundParams {
	/** The ID of the playground that you want to remove. */
	playground_id: number;
}

export type RemoveCodePlaygroundResponse = JsonSuccess;

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetRealmExportsParams = {};

export type GetRealmExportsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * An array of dictionaries where each dictionary contains
	 * details about a data export of the organization.
	 */
	exports: RealmExport[];
};

export interface ExportRealmParams {
	/**
	 * Whether the data export should be public, full with consent,
	 * or full without consent.
	 *
	 * New in Zulip 10.0 (feature level 304).
	 */
	export_type?: "public" | "full_with_consent" | "full_without_consent";
}

export type ExportRealmResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * The ID of the data export created.
	 *
	 * New in Zulip 7.0 (feature level 182).
	 */
	id: number;
};

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetRealmExportConsentsParams = {};

export type GetRealmExportConsentsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * An array of objects where each object contains a user ID, whether the
	 * user has consented for their private data to be exported, and their
	 * email visibility policy.
	 */
	export_consents: {
		/** The user ID. */
		user_id: number;
		/** Whether the user has consented for their private data export. */
		consented: boolean;
		/**
		 * The [policy][permission-level] for [which other users][help-email-visibility]
		 * in this organization can see the user's real email address.
		 *
		 * New in Zulip 7.0 (feature level 163).
		 */
		email_address_visibility: EmailAddressVisibility;
	}[];
};

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetInvitesParams = {};

export type GetInvitesResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * An array of objects, each representing a single unexpired
	 * [invitation](https://zulip.com/help/invite-new-users).
	 */
	invites: Invite[];
};

export interface SendInvitesParams {
	/**
	 * The string containing the email addresses, separated by commas or
	 * newlines, that will be sent an invitation.
	 */
	invitee_emails: string;
	/**
	 * The number of minutes before the invitation will expire. If `null`, the
	 * invitation will never expire. If unspecified, the server will use a default
	 * value (based on the `INVITATION_LINK_VALIDITY_MINUTES` server setting, which
	 * defaults to 14400, i.e. 10 days) for when the invitation will expire.
	 *
	 * New in Zulip 6.0 (feature level 126).
	 */
	invite_expires_in_minutes?: InviteExpirationParameter;
	/**
	 * The [organization-level role](https://zulip.com/api/roles-and-permissions) of the user that is
	 * created when the invitation is accepted.
	 * Possible values are:
	 */
	invite_as?: InviteRoleParameter;
	/**
	 * A list containing the [IDs of the channels](https://zulip.com/api/get-stream-id) that the
	 * newly created user will be automatically subscribed to if the invitation
	 * is accepted, in addition to any default channels that the new user may
	 * be subscribed to based on the `include_realm_default_subscriptions`
	 * parameter.
	 */
	stream_ids: number[];
	/**
	 * A list containing the [IDs of the user groups](https://zulip.com/api/get-user-groups) that
	 * the newly created user will be automatically added to if the invitation
	 * is accepted. If the list is empty, then the new user will not be
	 * added to any user groups. The acting user must have permission to add users
	 * to the groups listed in this request.
	 *
	 * New in Zulip 10.0 (feature level 322).
	 */
	group_ids?: number[];
	/**
	 * Boolean indicating whether the newly created user should be subscribed
	 * to the [default channels][default-channels] for the organization.
	 *
	 * New in Zulip 9.0 (feature level 261).
	 */
	include_realm_default_subscriptions?: boolean;
	/**
	 * A boolean indicating whether the referrer would like to receive a
	 * direct message from [notification
	 * bot](https://zulip.com/help/configure-automated-notices) when a user account is created
	 * using this invitation.
	 *
	 * New in Zulip 9.0 (feature level 267).
	 */
	notify_referrer_on_join?: boolean;
	/**
	 * Custom message text, in Zulip Markdown format, to be sent by the
	 * Welcome Bot to new users that join the organization via this
	 * invitation.
	 *
	 * New in Zulip 11.0 (feature level 416).
	 */
	welcome_message_custom_text?: string | null;
}

export type SendInvitesResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
};

export interface CreateInviteLinkParams {
	/**
	 * The number of minutes before the invitation will expire. If `null`, the
	 * invitation will never expire. If unspecified, the server will use a default
	 * value (based on the `INVITATION_LINK_VALIDITY_MINUTES` server setting, which
	 * defaults to 14400, i.e. 10 days) for when the invitation will expire.
	 *
	 * New in Zulip 6.0 (feature level 126).
	 */
	invite_expires_in_minutes?: InviteExpirationParameter;
	/**
	 * The [organization-level role](https://zulip.com/api/roles-and-permissions) of the user that is
	 * created when the invitation is accepted.
	 * Possible values are:
	 */
	invite_as?: InviteRoleParameter;
	/**
	 * A list containing the [IDs of the channels](https://zulip.com/api/get-stream-id) that the
	 * newly created user will be automatically subscribed to if the invitation
	 * is accepted, in addition to any default channels that the new user may
	 * be subscribed to based on the `include_realm_default_subscriptions`
	 * parameter.
	 */
	stream_ids?: number[];
	/**
	 * A list containing the [IDs of the user groups](https://zulip.com/api/get-user-groups) that
	 * the newly created user will be automatically added to if the invitation
	 * is accepted. If the list is empty, then the new user will not be
	 * added to any user groups. The acting user must have permission to add users
	 * to the groups listed in this request.
	 *
	 * New in Zulip 10.0 (feature level 322).
	 */
	group_ids?: number[];
	/**
	 * Boolean indicating whether the newly created user should be subscribed
	 * to the [default channels][default-channels] for the organization.
	 *
	 * New in Zulip 9.0 (feature level 261).
	 */
	include_realm_default_subscriptions?: boolean;
	/**
	 * Custom message text, in Zulip Markdown format, to be sent by the
	 * Welcome Bot to new users that join the organization via this
	 * invitation.
	 *
	 * New in Zulip 11.0 (feature level 416).
	 */
	welcome_message_custom_text?: string | null;
}

export type CreateInviteLinkResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * The URL of the [reusable invitation link](https://zulip.com/help/invite-new-users#create-a-reusable-invitation-link)
	 * that was created by this request.
	 */
	invite_link: string;
};

export interface RevokeEmailInviteParams {
	/** The ID of the email invitation to be revoked. */
	invite_id: number;
}

export type RevokeEmailInviteResponse = JsonSuccess;

export interface RevokeInviteLinkParams {
	/** The ID of the reusable invitation link to be revoked. */
	invite_id: number;
}

export type RevokeInviteLinkResponse = JsonSuccess;

export interface ResendEmailInviteParams {
	/** The ID of the email invitation to be resent. */
	invite_id: number;
}

export type ResendEmailInviteResponse = JsonSuccess;

export interface TestWelcomeBotCustomMessageParams {
	/**
	 * Custom message text, in Zulip Markdown format, to be used for
	 * this test message.
	 */
	welcome_message_custom_text: string;
}

export type TestWelcomeBotCustomMessageResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The message_id of the test welcome bot custom message. */
	message_id: number;
};

export interface RegisterQueueParams {
	/**
	 * Set to `true` if you would like the content to be rendered in HTML
	 * format (otherwise the API will return the raw text that the user
	 * entered)
	 */
	apply_markdown?: boolean;
	/**
	 * Whether the client supports computing gravatars URLs. If
	 * enabled, `avatar_url` will be included in the response only
	 * if there is a Zulip avatar, and will be `null` for users who
	 * are using gravatar as their avatar. This option
	 * significantly reduces the compressed size of user data,
	 * since gravatar URLs are long, random strings and thus do not
	 * compress well. The `client_gravatar` field is set to `true` if
	 * clients can compute their own gravatars.
	 */
	client_gravatar?: boolean;
	/**
	 * Whether each returned channel object should include a `subscribers`
	 * field containing a list of the user IDs of its subscribers.
	 */
	include_subscribers?: "true" | "false" | "partial";
	/**
	 * If `true`, the `presences` object returned in the response will be keyed
	 * by user ID and the entry for each user's presence data will be in the
	 * modern format.
	 */
	slim_presence?: boolean;
	/**
	 * Limits how far back in time to fetch user presence data. If not specified,
	 * defaults to 14 days. A value of N means that the oldest presence data
	 * fetched will be from at most N days ago.
	 *
	 * New in Zulip 10.0 (feature level 288).
	 */
	presence_history_limit_days?: number;
	/**
	 * A JSON-encoded array indicating which types of events you're interested
	 * in. Values that you might find useful include:
	 */
	event_types?: Event_types;
	/**
	 * Whether you would like to request message events from all public
	 * channels. Useful for workflow bots that you'd like to see all new messages
	 * sent to public channels. (You can also subscribe the user to private channels).
	 */
	all_public_streams?: AllPublicChannels;
	/**
	 * Dictionary containing details on features the client supports that are
	 * relevant to the format of responses sent by the server.
	 *
	 * New in Zulip 3.0 (feature level 13).
	 */
	client_capabilities?: Record<string, unknown>;
	/**
	 * Same as the `event_types` parameter except that the values in
	 * `fetch_event_types` are used to fetch initial data. If
	 * `fetch_event_types` is not provided, `event_types` is used and if
	 * `event_types` is not provided, this parameter defaults to `null`.
	 */
	fetch_event_types?: string[];
	/**
	 * A JSON-encoded array of arrays of length 2 indicating the
	 * [narrow filter(s)](https://zulip.com/api/construct-narrow) for which you'd
	 * like to receive events for.
	 */
	narrow?: Narrow;
	/**
	 * At least how long (in seconds) the server should keep the event
	 * queue alive when the client is not polling. If the client does
	 * not poll before this timeout, the queue will eventually be
	 * garbage-collected.
	 *
	 * New in Zulip 12.0 (feature level 481).
	 */
	idle_queue_timeout?: number | "mobile";
}

export type RegisterQueueResponse = JsonSuccessBase & ({
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The ID of the queue that has been allocated for your client. */
	queue_id: string | null;
	/**
	 * The effective idle queue timeout for the allocated queue,
	 * in seconds. This is the resolved value of the
	 * `idle_queue_timeout` request parameter, after applying
	 * defaults and server-side limits.
	 *
	 * New in Zulip 12.0 (feature level 481).
	 */
	idle_queue_timeout_secs?: number;
	/** The initial value of `last_event_id` to pass to `GET /api/v1/events`. */
	last_event_id: number;
	/**
	 * The server's current [Zulip feature level](https://zulip.com/api/changelog).
	 *
	 * New in Zulip 3.0 (feature level 1).
	 */
	zulip_feature_level?: number;
	/**
	 * The server's version number. This is often a release version number,
	 * like `2.1.7`. But for a server running a [version from Git][git-release],
	 * it will be a Git reference to the commit, like `5.0-dev-1650-gc3fd37755f`.
	 */
	zulip_version?: string;
	/**
	 * The `git merge-base` between `zulip_version` and official branches
	 * in the public
	 * [Zulip server and web app repository](https://github.com/zulip/zulip),
	 * in the same format as `zulip_version`. This will equal
	 * `zulip_version` if the server is not running a fork of the Zulip server.
	 *
	 * New in Zulip 5.0 (feature level 88).
	 */
	zulip_merge_base: string;
	/** Present if `alert_words` is present in `fetch_event_types`. */
	alert_words?: string[];
	/** Present if `custom_profile_fields` is present in `fetch_event_types`. */
	custom_profile_fields?: CustomProfileField[];
	/** Present if `custom_profile_fields` is present in `fetch_event_types`. */
	custom_profile_field_types?: Record<string, {
			/** The ID of the custom profile field type. */
			id: number;
			/** The name of the custom profile field type. */
			name: string;
		}>;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 8.0 (feature level 203).
	 */
	realm_date_created?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`,
	 * and the realm is a demo organization.
	 *
	 * New in Zulip 5.0 (feature level 94).
	 */
	demo_organization_scheduled_deletion_date?: number;
	/**
	 * An array containing draft objects for the user. These drafts are being
	 * stored on the backend for the purpose of syncing across devices. This
	 * array will be empty if `enable_drafts_synchronization` is set to `false`.
	 */
	drafts: Draft[];
	/** Present if `onboarding_steps` is present in `fetch_event_types`. */
	onboarding_steps?: OnboardingStep[];
	/**
	 * Present if `onboarding_steps` is present in `fetch_event_types`.
	 *
	 * New in Zulip 10.0 (feature level 369).
	 */
	navigation_tour_video_url?: string | null;
	/**
	 * Present if `message` is present in `fetch_event_types`.
	 * @deprecated
	 */
	max_message_id?: number;
	/**
	 * The maximum allowed length for a reminder note, in Unicode code points.
	 *
	 * New in Zulip 11.0 (feature level 415).
	 */
	max_reminder_note_length: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 4.0 (feature level 53).
	 */
	max_stream_name_length?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 4.0 (feature level 53).
	 */
	max_stream_description_length?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 11.0 (feature level 410).
	 */
	max_channel_folder_name_length?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 11.0 (feature level 410).
	 */
	max_channel_folder_description_length?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 4.0 (feature level 53).
	 */
	max_topic_length?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 4.0 (feature level 53).
	 */
	max_message_length?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 10.0 (feature level 332).
	 */
	server_min_deactivated_realm_deletion_days?: number | null;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 10.0 (feature level 332).
	 */
	server_max_deactivated_realm_deletion_days?: number | null;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 7.0 (feature level 164).
	 */
	server_presence_ping_interval_seconds?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 7.0 (feature level 164).
	 */
	server_presence_offline_threshold_seconds?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 8.0 (feature level 204).
	 */
	server_typing_started_expiry_period_milliseconds?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 8.0 (feature level 204).
	 */
	server_typing_stopped_wait_period_milliseconds?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 8.0 (feature level 204).
	 */
	server_typing_started_wait_period_milliseconds?: number;
	/**
	 * Present if `scheduled_messages` is present in `fetch_event_types`.
	 *
	 * New in Zulip 7.0 (feature level 179).
	 */
	scheduled_messages?: ScheduledMessage[];
	/**
	 * Present if `reminders` is present in `fetch_event_types`.
	 *
	 * New in Zulip 11.0 (feature level 399).
	 */
	reminders?: Reminder[];
	/**
	 * Present if `muted_topics` is present in `fetch_event_types`.
	 * @deprecated
	 */
	muted_topics?: (string | number)[][];
	/**
	 * Present if `muted_users` is present in `fetch_event_types`.
	 *
	 * New in Zulip 4.0 (feature level 48).
	 */
	muted_users?: {
		/** The ID of the muted user. */
		id: number;
		/** An integer UNIX timestamp representing when the user was muted. */
		timestamp: number;
	}[];
	/** Present if `presence` is present in `fetch_event_types`. */
	presences?: Record<string, ModernPresenceFormat | Record<string, LegacyPresenceFormat>>;
	/**
	 * Present if `presence` is present in `fetch_event_types`.
	 *
	 * New in Zulip 9.0 (feature level 263).
	 */
	presence_last_update_id?: number;
	/**
	 * Present if `presence` is present in `fetch_event_types`.
	 *
	 * New in Zulip 5.0 (feature level 70).
	 */
	server_timestamp?: number;
	/** Present if `realm_domains` is present in `fetch_event_types`. */
	realm_domains?: RealmDomain[];
	/** Present if `realm_emoji` is present in `fetch_event_types`. */
	realm_emoji?: Record<string, RealmEmoji>;
	/**
	 * Present if `realm_linkifiers` is present in `fetch_event_types`.
	 *
	 * New in Zulip 4.0 (feature level 54).
	 */
	realm_linkifiers?: {
		/**
		 * The [Python regular expression](https://docs.python.org/3/howto/regex.html)
		 * pattern which represents the pattern that should be linkified on matching.
		 */
		pattern: string;
		/**
		 * The [RFC 6570](https://www.rfc-editor.org/rfc/rfc6570.html) compliant URL
		 * template with which the pattern matching string should be linkified.
		 *
		 * New in Zulip 7.0 (feature level 176).
		 */
		url_template: string;
		/** The ID of the linkifier. */
		id: number;
	}[];
	/**
	 * Legacy property for [linkifiers](https://zulip.com/help/add-a-custom-linkifier).
	 * Present if `realm_filters` is present in `fetch_event_types`.
	 * @deprecated
	 */
	realm_filters?: (number | string)[][];
	/**
	 * Present if `realm_playgrounds` is present in `fetch_event_types`.
	 *
	 * New in Zulip 4.0 (feature level 49).
	 */
	realm_playgrounds?: RealmPlayground[];
	/** Present if `realm_user_groups` is present in `fetch_event_types`. */
	realm_user_groups?: UserGroup[];
	/** Present if `realm_bot` is present in `fetch_event_types`. */
	realm_bots?: Bot[];
	/** Present if `realm_embedded_bots` is present in `fetch_event_types`. */
	realm_embedded_bots?: {
		/** The name of the bot. */
		name: string;
		/**
		 * A dictionary of string key/value pairs, which describe the configuration
		 * for the bot. These are usually details like API keys, and are unique to
		 * the integration/bot. Can be an empty dictionary.
		 */
		config: BotConfiguration;
	}[];
	/** Present if `realm_incoming_webhook_bots` is present in `fetch_event_types`. */
	realm_incoming_webhook_bots?: {
		/**
		 * A machine-readable unique name identifying the integration, all-lower-case without
		 * spaces.
		 */
		name: string;
		/**
		 * A human-readable display name identifying the integration that this bot implements,
		 * intended to be used in menus for selecting which integration to create.
		 *
		 * New in Zulip 8.0 (feature level 207).
		 */
		display_name: string;
		/**
		 * For incoming webhook integrations that support the Zulip server filtering incoming
		 * events, the list of event types supported by it.
		 *
		 * New in Zulip 8.0 (feature level 207).
		 */
		all_event_types?: string[] | null;
		/**
		 * An array of configuration options that can be set when creating
		 * a bot user for this incoming webhook integration.
		 */
		config_options: WebhookConfigOption;
		/**
		 * An array of optional URL parameter options for the incoming webhook
		 * integration. In the web app, these are used when
		 * [generating a URL for an integration](https://zulip.com/help/generate-integration-url).
		 *
		 * New in Zulip 11.0 (feature level 403).
		 */
		url_options: WebhookUrlOption;
	}[];
	/** Present if `recent_private_conversations` is present in `fetch_event_types`. */
	recent_private_conversations?: {
		/**
		 * The highest message ID of the conversation, intended to support sorting
		 * the conversations by recency.
		 */
		max_message_id: number;
		/**
		 * The list of users other than the current user in the direct message
		 * conversation. This will be an empty list for direct messages sent to
		 * oneself.
		 */
		user_ids: number[];
	}[];
	/**
	 * Present if `navigation_views` is present in `fetch_event_types`.
	 * An array of dictionaries containing data on all of the current user's
	 * navigation views.
	 *
	 * New in Zulip 11.0 (feature level 390).
	 */
	navigation_views?: NavigationView[];
	/**
	 * Present if `saved_snippets` is present in `fetch_event_types`.
	 *
	 * New in Zulip 10.0 (feature level 297).
	 */
	saved_snippets?: SavedSnippet[];
	/** Present if `subscription` is present in `fetch_event_types`. */
	subscriptions?: Subscription[];
	/** Present if `subscription` is present in `fetch_event_types`. */
	unsubscribed?: Subscription[];
	/** Present if `subscription` is present in `fetch_event_types`. */
	never_subscribed?: (BasicChannelBase & {
		stream_id?: unknown;
		name?: unknown;
		is_archived?: unknown;
		description?: unknown;
		date_created?: unknown;
		creator_id: unknown;
		invite_only?: unknown;
		rendered_description?: unknown;
		is_web_public?: unknown;
		stream_post_policy?: unknown;
		message_retention_days: unknown;
		history_public_to_subscribers?: unknown;
		topics_policy?: unknown;
		first_message_id: unknown;
		folder_id: unknown;
		is_recently_active?: unknown;
		is_announcement_only?: unknown;
		can_add_subscribers_group?: unknown;
		can_remove_subscribers_group?: unknown;
		can_administer_channel_group?: unknown;
		can_delete_any_message_group?: unknown;
		can_delete_own_message_group?: unknown;
		can_move_messages_out_of_channel_group?: unknown;
		can_move_messages_within_channel_group?: unknown;
		can_send_message_group?: unknown;
		can_subscribe_group?: unknown;
		can_resolve_topics_group?: unknown;
		can_create_topic_group?: unknown;
		subscriber_count?: unknown;
		/**
		 * The average number of messages sent to the channel per week, as
		 * estimated based on recent weeks, rounded to the nearest integer.
		 */
		stream_weekly_traffic: number | null;
		/**
		 * A list of user IDs of users who are subscribed
		 * to the channel. Included only if `include_subscribers` is `true`.
		 */
		subscribers: number[];
		/**
		 * If [`include_subscribers="partial"`](https://zulip.com/api/get-subscriptions#parameter-include_subscribers)
		 * was requested, the server may, at its discretion, send a
		 * `partial_subscribers` list rather than a `subscribers` list
		 * for channels with a large number of subscribers.
		 *
		 * New in Zulip 11.0 (feature level 412).
		 */
		partial_subscribers: number[];
	})[];
	/**
	 * Present if `channel_folders` is present in `fetch_event_types`.
	 *
	 * New in Zulip 11.0 (feature level 389).
	 */
	channel_folders?: ChannelFolder[];
	/**
	 * Present if `message` and `update_message_flags` are both present in
	 * `event_types`.
	 */
	unread_msgs?: {
		/**
		 * The total number of unread messages to display. This includes one-on-one and group
		 * direct messages, as well as channel messages that are not [muted](https://zulip.com/help/mute-a-topic).
		 */
		count: number;
		/**
		 * An array of objects where each object contains details of unread
		 * one-on-one direct messages with a specific user.
		 */
		pms: {
			/**
			 * The user ID of the other participant in this one-on-one direct
			 * message conversation. Will be the current user's ID for messages
			 * that they sent in a one-on-one direct message conversation with
			 * themself.
			 *
			 * New in Zulip 5.0 (feature level 119).
			 */
			other_user_id: number;
			/**
			 * Old name for the `other_user_id` field. Clients should access
			 * this field in Zulip server versions that do not yet support
			 * `other_user_id`.
			 * @deprecated
			 */
			sender_id: number;
			/**
			 * The message IDs of the recent unread direct messages sent
			 * by either user in this one-on-one direct message conversation,
			 * sorted in ascending order.
			 */
			unread_message_ids: number[];
		}[];
		/**
		 * An array of dictionaries where each dictionary contains details of all
		 * unread messages of a single subscribed channel. This includes muted channels
		 * and muted topics, even though those messages are excluded from `count`.
		 */
		streams: {
			/** The topic under which the messages were sent. */
			topic: string;
			/** The ID of the channel to which the messages were sent. */
			stream_id: number;
			/**
			 * The message IDs of the recent unread messages sent in this channel,
			 * sorted in ascending order.
			 */
			unread_message_ids: number[];
		}[];
		/**
		 * An array of objects where each object contains details of unread
		 * group direct messages with a specific group of users.
		 */
		huddles: {
			/**
			 * A string containing the IDs of all users in the group
			 * direct message conversation, including the current user,
			 * separated by commas and sorted numerically; for example:
			 * `"1,2,3"`.
			 */
			user_ids_string: string;
			/**
			 * The message IDs of the recent unread messages which have been sent in
			 * this group direct message conversation, sorted in ascending order.
			 */
			unread_message_ids: number[];
		}[];
		/**
		 * Array containing the IDs of all unread messages in which the user was
		 * mentioned directly, and unread [non-muted](https://zulip.com/help/mute-a-topic) messages
		 * in which the user was mentioned through a wildcard.
		 */
		mentions: number[];
		/**
		 * Whether this data set was truncated because the user has too many
		 * unread messages. When truncation occurs, only the most recent
		 * `MAX_UNREAD_MESSAGES` (currently 50000) messages will be considered
		 * when forming this response. When `true`, we recommend that clients
		 * display a warning, as they are likely to produce erroneous results
		 * until reloaded with the user having fewer than `MAX_UNREAD_MESSAGES`
		 * unread messages.
		 *
		 * New in Zulip 4.0 (feature level 44).
		 */
		old_unreads_missing: boolean;
	};
	/** Present if `starred_messages` is present in `fetch_event_types`. */
	starred_messages?: number[];
	/** Present if `stream` is present in `fetch_event_types`. */
	streams?: BasicChannel[];
	/** Present if `default_streams` is present in `fetch_event_types`. */
	realm_default_streams?: number[];
	/** Present if `default_stream_groups` is present in `fetch_event_types`. */
	realm_default_stream_groups?: DefaultChannelGroup[];
	/** Present if `stop_words` is present in `fetch_event_types`. */
	stop_words?: string[];
	/** Present if `user_status` is present in `fetch_event_types`. */
	user_status?: Record<string, UserStatus>;
	/**
	 * Present if `user_settings` is present in `fetch_event_types`.
	 *
	 * New in Zulip 5.0 (feature level 89).
	 */
	user_settings?: {
		/** Whether time should be [displayed in 24-hour notation](https://zulip.com/help/change-the-time-format). */
		twenty_four_hour_time: boolean | null;
		/**
		 * Whether or not to mark messages as read when the user scrolls through their
		 * feed.
		 *
		 * New in Zulip 7.0 (feature level 175).
		 */
		web_mark_read_on_scroll_policy: number;
		/**
		 * Web/desktop app setting controlling the default navigation
		 * behavior when clicking on a channel link.
		 *
		 * New in Zulip 9.0 (feature level 269).
		 */
		web_channel_default_view: number;
		/**
		 * Whether clients should display the [number of starred
		 * messages](https://zulip.com/help/star-a-message#display-the-number-of-starred-messages).
		 */
		starred_message_counts: boolean;
		/**
		 * Whether the user is configured to receive typing notifications from
		 * other users. The server will only deliver typing notifications events
		 * to users who for whom this is enabled.
		 *
		 * New in Zulip 9.0 (feature level 253).
		 */
		receives_typing_notifications: boolean;
		/**
		 * Whether the user should be shown an alert, offering to update their
		 * [profile time zone](https://zulip.com/help/change-your-timezone), when the time displayed
		 * for the profile time zone differs from the current time displayed by the
		 * time zone configured on their device.
		 *
		 * New in Zulip 10.0 (feature level 329).
		 */
		web_suggest_update_timezone: boolean;
		/**
		 * Whether to use the [maximum available screen width](https://zulip.com/help/enable-full-width-display)
		 * for the web app's center panel (message feed, recent conversations) on wide screens.
		 */
		fluid_layout_width: boolean;
		/**
		 * This setting is reserved for use to control variations in Zulip's design
		 * to help visually impaired users.
		 */
		high_contrast_mode: boolean;
		/**
		 * User-configured primary `font-size` for the web application, in pixels.
		 *
		 * New in Zulip 9.0 (feature level 245).
		 */
		web_font_size_px: number;
		/**
		 * User-configured primary `line-height` for the web application, in percent, so a
		 * value of 120 represents a `line-height` of 1.2.
		 *
		 * New in Zulip 9.0 (feature level 245).
		 */
		web_line_height_percent: number;
		/** Controls which [color theme](https://zulip.com/help/dark-theme) to use. */
		color_scheme: number;
		/**
		 * Whether to [translate emoticons to emoji](https://zulip.com/help/configure-emoticon-translations)
		 * in messages the user sends.
		 */
		translate_emoticons: boolean;
		/**
		 * Whether to display the names of reacting users on a message.
		 *
		 * New in Zulip 6.0 (feature level 125).
		 */
		display_emoji_reaction_users: boolean;
		/** What [default language](https://zulip.com/help/change-your-language) to use for the account. */
		default_language: string;
		/**
		 * The [home view](https://zulip.com/help/configure-home-view) used when opening a new
		 * Zulip web app window or hitting the `Esc` keyboard shortcut repeatedly.
		 *
		 * New in Zulip 8.0 (feature level 219).
		 */
		web_home_view: string;
		/**
		 * Whether the escape key navigates to the
		 * [configured home view](https://zulip.com/help/configure-home-view).
		 *
		 * New in Zulip 8.0 (feature level 219).
		 */
		web_escape_navigates_to_home_view: boolean;
		/** Whether the users list on left sidebar in narrow windows. */
		left_side_userlist: boolean;
		/**
		 * The user's configured [emoji set](https://zulip.com/help/emoji-and-emoticons#use-emoticons),
		 * used to display emoji to the user everywhere they appear in the UI.
		 */
		emojiset: string;
		/** Whether to [hide inactive channels](https://zulip.com/help/manage-inactive-channels) in the left sidebar. */
		demote_inactive_streams: number;
		/**
		 * The style selected by the user for the right sidebar user list.
		 *
		 * New in Zulip 6.0 (feature level 141).
		 */
		user_list_style: number;
		/**
		 * Controls how animated images should be played in the message feed in the web/desktop application.
		 *
		 * New in Zulip 9.0 (feature level 275).
		 */
		web_animate_image_previews: string;
		/**
		 * Configuration for which channels should be displayed with a numeric unread count in the left sidebar.
		 * Channels that do not have an unread count will have a simple dot indicator for whether there are any
		 * unread messages.
		 *
		 * New in Zulip 8.0 (feature level 210).
		 */
		web_stream_unreads_count_display_policy: number;
		/**
		 * Controls whether user wants AI features like topic summarization to
		 * be hidden in all Zulip clients.
		 *
		 * New in Zulip 10.0 (feature level 350).
		 */
		hide_ai_features: boolean;
		/**
		 * Determines whether [channel folders](https://zulip.com/help/channel-folders)
		 * are used to organize how conversations with unread messages
		 * are displayed in the web/desktop application's Inbox view.
		 *
		 * New in Zulip 12.0 (feature level 431).
		 */
		web_inbox_show_channel_folders: boolean;
		/**
		 * Determines whether [channel folders](https://zulip.com/help/channel-folders)
		 * are used to organize how channels are displayed in the
		 * web/desktop application's left sidebar.
		 *
		 * New in Zulip 11.0 (feature level 411).
		 */
		web_left_sidebar_show_channel_folders: boolean;
		/**
		 * Determines whether the web/desktop application's left sidebar displays
		 * the unread message count summary.
		 *
		 * New in Zulip 11.0 (feature level 398).
		 */
		web_left_sidebar_unreads_count_summary: boolean;
		/**
		 * The IANA identifier of the user's [profile time zone](https://zulip.com/help/change-your-timezone),
		 * which is used primarily to display the user's local time to other users.
		 */
		timezone: string;
		/**
		 * Whether the user setting for [sending on pressing Enter](https://zulip.com/help/configure-send-message-keys)
		 * in the compose box is enabled.
		 */
		enter_sends: boolean;
		/**
		 * A boolean parameter to control whether synchronizing drafts is enabled for
		 * the user. When synchronization is disabled, all drafts stored in the server
		 * will be automatically deleted from the server.
		 */
		enable_drafts_synchronization: boolean;
		/** Enable visual desktop notifications for channel messages. */
		enable_stream_desktop_notifications: boolean;
		/** Enable email notifications for channel messages. */
		enable_stream_email_notifications: boolean;
		/** Enable mobile notifications for channel messages. */
		enable_stream_push_notifications: boolean;
		/** Enable audible desktop notifications for channel messages. */
		enable_stream_audible_notifications: boolean;
		/** Notification sound name. */
		notification_sound: string;
		/** Enable visual desktop notifications for direct messages and @-mentions. */
		enable_desktop_notifications: boolean;
		/**
		 * Enable audible desktop notifications for direct messages and
		 * @-mentions.
		 */
		enable_sounds: boolean;
		/**
		 * Enable visual desktop notifications for messages sent to followed topics.
		 *
		 * New in Zulip 8.0 (feature level 189).
		 */
		enable_followed_topic_desktop_notifications: boolean;
		/**
		 * Enable email notifications for messages sent to followed topics.
		 *
		 * New in Zulip 8.0 (feature level 189).
		 */
		enable_followed_topic_email_notifications: boolean;
		/**
		 * Enable push notifications for messages sent to followed topics.
		 *
		 * New in Zulip 8.0 (feature level 189).
		 */
		enable_followed_topic_push_notifications: boolean;
		/**
		 * Enable audible desktop notifications for messages sent to followed topics.
		 *
		 * New in Zulip 8.0 (feature level 189).
		 */
		enable_followed_topic_audible_notifications: boolean;
		/**
		 * The duration (in seconds) for which the server should wait to batch
		 * email notifications before sending them.
		 */
		email_notifications_batching_period_seconds: number;
		/**
		 * Enable email notifications for direct messages and @-mentions received
		 * when the user is offline.
		 */
		enable_offline_email_notifications: boolean;
		/**
		 * Enable mobile notification for direct messages and @-mentions received
		 * when the user is offline.
		 */
		enable_offline_push_notifications: boolean;
		/**
		 * Enable mobile notification for direct messages and @-mentions received
		 * when the user is online.
		 */
		enable_online_push_notifications: boolean;
		/** Enable digest emails when the user is away. */
		enable_digest_emails: boolean;
		/** Enable marketing emails. Has no function outside Zulip Cloud. */
		enable_marketing_emails: boolean;
		/** Enable email notifications for new logins to account. */
		enable_login_emails: boolean;
		/** Include the message's content in email notifications for new messages. */
		message_content_in_email_notifications: boolean;
		/** Include content of direct messages in desktop notifications. */
		pm_content_in_desktop_notifications: boolean;
		/**
		 * Whether wildcard mentions (E.g. @**all**) should send notifications
		 * like a personal mention.
		 */
		wildcard_mentions_notify: boolean;
		/**
		 * Whether wildcard mentions (e.g., @**all**) in messages sent to followed topics
		 * should send notifications like a personal mention.
		 *
		 * New in Zulip 8.0 (feature level 189).
		 */
		enable_followed_topic_wildcard_mentions_notify: boolean;
		/** Unread count badge (appears in desktop sidebar and browser tab) */
		desktop_icon_count_display: number;
		/**
		 * Whether to [include organization name in subject of message notification
		 * emails](https://zulip.com/help/email-notifications#include-organization-name-in-subject-line).
		 *
		 * New in Zulip 7.0 (feature level 168).
		 */
		realm_name_in_email_notifications_policy: number;
		/**
		 * Which [topics to follow automatically](https://zulip.com/help/mute-a-topic).
		 *
		 * New in Zulip 8.0 (feature level 214).
		 */
		automatically_follow_topics_policy: number;
		/**
		 * Which [topics to unmute automatically in muted channels](https://zulip.com/help/mute-a-topic).
		 *
		 * New in Zulip 8.0 (feature level 214).
		 */
		automatically_unmute_topics_in_muted_streams_policy: number;
		/**
		 * Whether the server will automatically mark the user as following
		 * topics where the user is mentioned.
		 *
		 * New in Zulip 8.0 (feature level 235).
		 */
		automatically_follow_topics_where_mentioned: boolean;
		/**
		 * Controls whether the resolved-topic notices are marked as read.
		 *
		 * New in Zulip 11.0 (feature level 385).
		 */
		resolved_topic_notice_auto_read_policy: string;
		/** Display the presence status to other users when online. */
		presence_enabled: boolean;
		/**
		 * Array containing the names of the notification sound options
		 * supported by this Zulip server. Only relevant to support UI
		 * for configuring notification sounds.
		 */
		available_notification_sounds: string[];
		/**
		 * Array of dictionaries where each dictionary describes an emoji set
		 * supported by this version of the Zulip server.
		 */
		emojiset_choices: {
			/**
			 * The key or the name of the emoji set which will be the value
			 * of `emojiset` if this emoji set is chosen.
			 */
			key: string;
			/** The text describing the emoji set. */
			text: string;
		}[];
		/**
		 * Whether the user has chosen to send [typing
		 * notifications](https://zulip.com/help/typing-notifications)
		 * when composing direct messages. The client should send typing
		 * notifications for direct messages if and only if this setting is enabled.
		 *
		 * New in Zulip 5.0 (feature level 105).
		 */
		send_private_typing_notifications: boolean;
		/**
		 * Whether the user has chosen to send [typing
		 * notifications](https://zulip.com/help/typing-notifications)
		 * when composing channel messages. The client should send typing
		 * notifications for channel messages if and only if this setting is enabled.
		 *
		 * New in Zulip 5.0 (feature level 105).
		 */
		send_stream_typing_notifications: boolean;
		/**
		 * Whether other users are allowed to see whether you've
		 * read messages.
		 *
		 * New in Zulip 5.0 (feature level 105).
		 */
		send_read_receipts: boolean;
		/**
		 * Whether organization administrators are allowed to
		 * export your private data.
		 *
		 * New in Zulip 10.0 (feature level 293).
		 */
		allow_private_data_export: boolean;
		/**
		 * The [policy][permission-level] for [which other users][help-email-visibility]
		 * in this organization can see the user's real email address.
		 *
		 * New in Zulip 7.0 (feature level 163).
		 */
		email_address_visibility: EmailAddressVisibility;
		/**
		 * Web/desktop app setting for whether the user's view should
		 * automatically go to the conversation where they sent a message.
		 *
		 * New in Zulip 9.0 (feature level 268).
		 */
		web_navigate_to_sent_message: boolean;
	};
	/**
	 * Present if `user_topic` is present in `fetch_event_types`.
	 *
	 * New in Zulip 6.0 (feature level 134).
	 */
	user_topics?: {
		/** The ID of the channel to which the topic belongs. */
		stream_id: number;
		/** The name of the topic. */
		topic_name: string;
		/**
		 * An integer UNIX timestamp representing when the user-topic
		 * relationship was changed.
		 */
		last_updated: number;
		/**
		 * An integer indicating the user's visibility configuration for
		 * the topic.
		 */
		visibility_policy: number;
	}[];
	/** Present if `video_calls` is present in `fetch_event_types`. */
	has_zoom_token?: boolean;
	/**
	 * Present if `video_calls` is present in `fetch_event_types`.
	 *
	 * New in Zulip 12.0 (feature level 493).
	 */
	has_webex_token?: boolean;
	/** Present if `giphy` is present in `fetch_event_types`. */
	giphy_api_key?: string;
	/**
	 * Present if `tenor` is present in `fetch_event_types`.
	 *
	 * New in Zulip 12.0 (feature level 442).
	 */
	tenor_api_key?: string;
	/**
	 * Present if `klipy` is present in `fetch_event_types`.
	 *
	 * New in Zulip 12.0 (feature level 486).
	 */
	klipy_api_key?: string;
	/**
	 * Present if `device` is present in `fetch_event_types`.
	 *
	 * New in Zulip 12.0 (feature level 468).
	 */
	devices?: Record<string, {
			/**
			 * ID to reference the encryption key used to encrypt
			 * push notifications sent to the device.
			 */
			push_key_id: number | null;
			/**
			 * ID to reference the token provided by FCM/APNs to the device,
			 * which is registered to the push bouncer service.
			 */
			push_token_id: string | null;
			/**
			 * ID to reference the token provided by FCM/APNs to the device,
			 * whose registration is in progress to the push bouncer service.
			 */
			pending_push_token_id: string | null;
			/**
			 * The UNIX timestamp for the last time when `pending_push_token_id`
			 * was set to a new non-null value, in UTC seconds.
			 */
			push_token_last_updated_timestamp: number | null;
			/**
			 * If the push registration failed, a [Zulip API error
			 * code](https://zulip.com/api/rest-error-handling) indicating the type of
			 * failure that occurred.
			 */
			push_registration_error_code: string | null;
		}>;
	/**
	 * Whether the user is configured to receive typing notifications from other
	 * users. The server will only deliver typing notifications events to users who
	 * for whom this is enabled.
	 *
	 * New in Zulip 9.0 (feature level 253).
	 */
	receives_typing_notifications: boolean;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 10.0 (feature level 358).
	 */
	realm_message_edit_history_visibility_policy?: string;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 * @deprecated
	 */
	realm_allow_edit_history?: boolean;
	realm_can_add_custom_emoji_group: GroupSettingValue;
	realm_can_add_subscribers_group: GroupSettingValue;
	realm_can_delete_any_message_group: GroupSettingValue;
	realm_can_delete_own_message_group: GroupSettingValue;
	realm_can_set_delete_message_policy_group: GroupSettingValue;
	realm_can_set_topics_policy_group: GroupSettingValue;
	realm_can_invite_users_group: GroupSettingValue;
	realm_can_mention_many_users_group: GroupSettingValue;
	realm_can_move_messages_between_channels_group: GroupSettingValue;
	realm_can_move_messages_between_topics_group: GroupSettingValue;
	realm_can_create_groups: GroupSettingValue;
	realm_can_create_bots_group: GroupSettingValue;
	realm_can_create_write_only_bots_group: GroupSettingValue;
	realm_can_manage_all_groups: GroupSettingValue;
	realm_can_manage_billing_group: GroupSettingValue;
	realm_can_create_public_channel_group: GroupSettingValue;
	realm_can_create_private_channel_group: GroupSettingValue;
	realm_can_create_web_public_channel_group: GroupSettingValue;
	realm_can_resolve_topics_group: GroupSettingValue;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 * @deprecated
	 */
	realm_create_public_stream_policy?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 * @deprecated
	 */
	realm_create_private_stream_policy?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 * @deprecated
	 */
	realm_create_web_public_stream_policy?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 4.0 (feature level 33).
	 * @deprecated
	 */
	realm_wildcard_mention_policy?: number;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_default_language?: string;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 11.0 (feature level 416).
	 */
	realm_welcome_message_custom_text?: string;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_description?: string;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_digest_emails_enabled?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_disallow_disposable_email_addresses?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_email_changes_disabled?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_invite_required?: boolean;
	realm_create_multiuse_invite_group: GroupSettingValue;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 12.0 (feature level 469).
	 */
	realm_media_preview_size?: 100 | 150 | 200;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_inline_image_preview?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_inline_url_embed_preview?: boolean;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 11.0 (feature level 392).
	 */
	realm_topics_policy?: "allow_empty_topic" | "disable_empty_topic";
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 * @deprecated
	 */
	realm_mandatory_topics?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_message_retention_days?: number;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_name?: string;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 11.0 (feature level 409).
	 */
	realm_require_e2ee_push_notifications?: boolean;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 9.0 (feature level 246).
	 */
	realm_require_unique_names?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_name_changes_disabled?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_avatar_changes_disabled?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_emails_restricted_to_domains?: boolean;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 12.0 (feature level 434).
	 */
	realm_send_channel_events_messages?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_send_welcome_emails?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_message_content_allowed_in_email_notifications?: boolean;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 5.0 (feature level 109).
	 */
	realm_enable_spectator_access?: boolean;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 6.0 (feature level 129).
	 */
	realm_want_advertise_in_communities_directory?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_video_chat_provider?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 8.0 (feature level 212).
	 */
	realm_jitsi_server_url?: string | null;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 4.0 (feature level 55).
	 */
	realm_gif_rating_policy?: number;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_waiting_period_threshold?: number;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_digest_weekday?: number;
	realm_direct_message_initiator_group: GroupSettingValue;
	realm_direct_message_permission_group: GroupSettingValue;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_default_code_block_language?: string;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_message_content_delete_limit_seconds?: number | null;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_authentication_methods?: Record<string, RealmAuthenticationMethod>;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_allow_message_editing?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_message_content_edit_limit_seconds?: number | null;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 7.0 (feature level 162).
	 */
	realm_move_messages_within_stream_limit_seconds?: number | null;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 7.0 (feature level 162).
	 */
	realm_move_messages_between_streams_limit_seconds?: number | null;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 6.0 (feature level 137).
	 */
	realm_enable_read_receipts?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_icon_url?: string;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_icon_source?: string;
	realm_workplace_users_group: GroupSettingValue;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 5.0 (feature level 72).
	 */
	max_icon_file_size_mib?: number;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_logo_url?: string;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_logo_source?: string;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_night_logo_url?: string;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_night_logo_source?: string;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 5.0 (feature level 72).
	 */
	max_logo_file_size_mib?: number;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_bot_domain?: string;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 * @deprecated
	 */
	realm_uri?: string;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 9.0 (feature level 257).
	 */
	realm_url?: string;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 12.0 (feature level 466).
	 */
	realm_uuid?: string;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_available_video_chat_providers?: Record<string, {
			/** The name of the video call provider. */
			name: string;
			/** The ID of the video call provider. */
			id: number;
		}>;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_presence_disabled?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	settings_send_digest_emails?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_email_auth_enabled?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_password_auth_enabled?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_push_notifications_enabled?: boolean;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 8.0 (feature level 231).
	 */
	realm_push_notifications_enabled_end_timestamp?: number | null;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 5.0 (feature level 72).
	 */
	realm_upload_quota_mib?: number | null;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 6.0 (feature level 128).
	 */
	realm_org_type?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 12.0 (feature level 438).
	 */
	realm_owner_full_content_access?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_plan_type?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 10.0 (feature level 348).
	 */
	realm_enable_guest_user_dm_warning?: boolean;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 8.0 (feature level 216).
	 */
	realm_enable_guest_user_indicator?: boolean;
	realm_can_access_all_users_group: GroupSettingValue;
	realm_can_summarize_topics_group: GroupSettingValue;
	/** Present if `realm` is present in `fetch_event_types`. */
	zulip_plan_is_not_limited?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	upgrade_text_for_wide_organization_logo?: string;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_default_external_accounts?: Record<string, {
			/** The name of the external account provider */
			name: string;
			/** The text describing the external account. */
			text: string;
			/**
			 * The help text to be displayed for the
			 * custom profile field in user-facing
			 * settings UI for configuring custom
			 * profile fields for this account.
			 */
			hint: string;
			/**
			 * The regex pattern of the URL of a profile page
			 * on the external site.
			 */
			url_pattern: string;
		}>;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 12.0 (feature level 456).
	 */
	realm_default_avatar_source?: string;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 * @deprecated
	 */
	jitsi_server_url?: string;
	/** Present if `realm` is present in `fetch_event_types`. */
	development_environment?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	server_generation?: number;
	/** Present if `realm` is present in `fetch_event_types`. */
	password_min_length?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 10.0 (feature level 338).
	 */
	password_max_length?: number;
	/** Present if `realm` is present in `fetch_event_types`. */
	password_min_guesses?: number;
	/** Present if `realm` is present in `fetch_event_types`. */
	gif_rating_policy_options?: Record<string, {
			/** The description of the rating option. */
			name: string;
			/** The ID of the rating option. */
			id: number;
		}>;
	/** Present if `realm` is present in `fetch_event_types`. */
	max_file_upload_size_mib?: number;
	/** Present if `realm` is present in `fetch_event_types`. */
	max_avatar_file_size_mib?: number;
	/** Present if `realm` is present in `fetch_event_types`. */
	server_inline_image_preview?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	server_inline_url_embed_preview?: boolean;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 9.0 (feature level 273).
	 */
	server_thumbnail_formats?: {
		/** The file path component of the thumbnail format. */
		name: string;
		/** The maximum width of this format. */
		max_width: number;
		/** The maximum height of this format. */
		max_height: number;
		/** The extension of this format. */
		format: string;
		/**
		 * If this file format is animated. These formats
		 * are only generated for uploaded images which
		 * themselves are animated.
		 */
		animated: boolean;
	}[];
	/** Present if `realm` is present in `fetch_event_types`. */
	server_avatar_changes_disabled?: boolean;
	/** Present if `realm` is present in `fetch_event_types`. */
	server_name_changes_disabled?: boolean;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 5.0 (feature level 74).
	 */
	server_needs_upgrade?: boolean;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 5.0 (feature level 110).
	 */
	server_web_public_streams_enabled?: boolean;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 6.0 (feature level 140).
	 */
	server_emoji_data_url?: string;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 8.0 (feature level 212).
	 */
	server_jitsi_server_url?: string | null;
	/**
	 * Present if `realm` is present in `fetch_event_types`
	 *
	 * New in Zulip 10.0 (feature level 350).
	 */
	server_can_summarize_topics?: boolean;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 5.0 (feature level 74).
	 */
	event_queue_longpoll_timeout_seconds?: number;
	/**
	 * Present if `realm_billing` is present in `fetch_event_types`.
	 *
	 * New in Zulip 10.0 (feature level 363).
	 */
	realm_billing?: {
		/**
		 * Whether there is a pending sponsorship request for the organization. Note that
		 * this field will always be `false` if the user is not in `can_manage_billing_group`.
		 *
		 * New in Zulip 10.0 (feature level 363).
		 */
		has_pending_sponsorship_request: boolean;
	};
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 10.0 (feature level 331).
	 */
	realm_moderation_request_channel_id?: number;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_new_stream_announcements_stream_id?: number;
	/** Present if `realm` is present in `fetch_event_types`. */
	realm_signup_announcements_stream_id?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 9.0 (feature level 242).
	 */
	realm_zulip_update_announcements_stream_id?: number;
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 10.0 (feature level 334).
	 */
	realm_empty_topic_display_name?: string;
	/**
	 * Present if `realm_user_settings_defaults` is present in `fetch_event_types`.
	 *
	 * New in Zulip 5.0 (feature level 95).
	 */
	realm_user_settings_defaults?: {
		/**
		 * Whether time should be [displayed in 24-hour notation](https://zulip.com/help/change-the-time-format).
		 *
		 * New in Zulip 5.0 (feature level 99).
		 */
		twenty_four_hour_time: boolean | null;
		/**
		 * Whether or not to mark messages as read when the user scrolls through their
		 * feed.
		 *
		 * New in Zulip 7.0 (feature level 175).
		 */
		web_mark_read_on_scroll_policy: number;
		/**
		 * Web/desktop app setting controlling the default navigation
		 * behavior when clicking on a channel link.
		 *
		 * New in Zulip 9.0 (feature level 269).
		 */
		web_channel_default_view: number;
		/**
		 * Whether clients should display the [number of starred
		 * messages](https://zulip.com/help/star-a-message#display-the-number-of-starred-messages).
		 */
		starred_message_counts: boolean;
		/**
		 * Whether the user is configured to receive typing notifications from
		 * other users. The server will only deliver typing notifications events
		 * to users who for whom this is enabled.
		 *
		 * New in Zulip 9.0 (feature level 253).
		 */
		receives_typing_notifications: boolean;
		/**
		 * Whether the user should be shown an alert, offering to update their
		 * [profile time zone](https://zulip.com/help/change-your-timezone), when the time displayed
		 * for the profile time zone differs from the current time displayed by the
		 * time zone configured on their device.
		 *
		 * New in Zulip 10.0 (feature level 329).
		 */
		web_suggest_update_timezone: boolean;
		/**
		 * Whether to use the [maximum available screen width](https://zulip.com/help/enable-full-width-display)
		 * for the web app's center panel (message feed, recent conversations) on wide screens.
		 */
		fluid_layout_width: boolean;
		/**
		 * This setting is reserved for use to control variations in Zulip's design
		 * to help visually impaired users.
		 */
		high_contrast_mode: boolean;
		/**
		 * User-configured primary `font-size` for the web application, in pixels.
		 *
		 * New in Zulip 9.0 (feature level 245).
		 */
		web_font_size_px: number;
		/**
		 * User-configured primary `line-height` for the web application, in percent, so a
		 * value of 120 represents a `line-height` of 1.2.
		 *
		 * New in Zulip 9.0 (feature level 245).
		 */
		web_line_height_percent: number;
		/** Controls which [color theme](https://zulip.com/help/dark-theme) to use. */
		color_scheme: number;
		/**
		 * Whether to [translate emoticons to emoji](https://zulip.com/help/configure-emoticon-translations)
		 * in messages the user sends.
		 */
		translate_emoticons: boolean;
		/**
		 * Whether to display the names of reacting users on a message.
		 *
		 * New in Zulip 6.0 (feature level 125).
		 */
		display_emoji_reaction_users: boolean;
		/** What [default language](https://zulip.com/help/change-your-language) to use for the account. */
		default_language: string;
		/**
		 * The [home view](https://zulip.com/help/configure-home-view) used when opening a new
		 * Zulip web app window or hitting the `Esc` keyboard shortcut repeatedly.
		 *
		 * New in Zulip 8.0 (feature level 219).
		 */
		web_home_view: string;
		/**
		 * Whether the escape key navigates to the
		 * [configured home view](https://zulip.com/help/configure-home-view).
		 *
		 * New in Zulip 8.0 (feature level 219).
		 */
		web_escape_navigates_to_home_view: boolean;
		/** Whether the users list on left sidebar in narrow windows. */
		left_side_userlist: boolean;
		/**
		 * The user's configured [emoji set](https://zulip.com/help/emoji-and-emoticons#use-emoticons),
		 * used to display emoji to the user everywhere they appear in the UI.
		 */
		emojiset: string;
		/** Whether to [hide inactive channels](https://zulip.com/help/manage-inactive-channels) in the left sidebar. */
		demote_inactive_streams: number;
		/**
		 * The style selected by the user for the right sidebar user list.
		 *
		 * New in Zulip 6.0 (feature level 141).
		 */
		user_list_style: number;
		/**
		 * Controls how animated images should be played in the message feed in the web/desktop application.
		 *
		 * New in Zulip 9.0 (feature level 275).
		 */
		web_animate_image_previews: string;
		/**
		 * Configuration for which channels should be displayed with a numeric unread count in the left sidebar.
		 * Channels that do not have an unread count will have a simple dot indicator for whether there are any
		 * unread messages.
		 *
		 * New in Zulip 8.0 (feature level 210).
		 */
		web_stream_unreads_count_display_policy: number;
		/**
		 * Controls whether user wants AI features like topic summarization to
		 * be hidden in all Zulip clients.
		 *
		 * New in Zulip 10.0 (feature level 350).
		 */
		hide_ai_features: boolean;
		/**
		 * Determines whether [channel folders](https://zulip.com/help/channel-folders)
		 * are used to organize how conversations with unread messages
		 * are displayed in the web/desktop application's Inbox view.
		 *
		 * New in Zulip 12.0 (feature level 431).
		 */
		web_inbox_show_channel_folders: boolean;
		/**
		 * Determines whether [channel folders](https://zulip.com/help/channel-folders)
		 * are used to organize how channels are displayed in the
		 * web/desktop application's left sidebar.
		 *
		 * New in Zulip 11.0 (feature level 411).
		 */
		web_left_sidebar_show_channel_folders: boolean;
		/**
		 * Determines whether the web/desktop application's left sidebar displays
		 * the unread message count summary.
		 *
		 * New in Zulip 11.0 (feature level 398).
		 */
		web_left_sidebar_unreads_count_summary: boolean;
		/** Enable visual desktop notifications for channel messages. */
		enable_stream_desktop_notifications: boolean;
		/** Enable email notifications for channel messages. */
		enable_stream_email_notifications: boolean;
		/** Enable mobile notifications for channel messages. */
		enable_stream_push_notifications: boolean;
		/** Enable audible desktop notifications for channel messages. */
		enable_stream_audible_notifications: boolean;
		/** Notification sound name. */
		notification_sound: string;
		/** Enable visual desktop notifications for direct messages and @-mentions. */
		enable_desktop_notifications: boolean;
		/**
		 * Enable audible desktop notifications for direct messages and
		 * @-mentions.
		 */
		enable_sounds: boolean;
		/**
		 * Enable email notifications for direct messages and @-mentions received
		 * when the user is offline.
		 */
		enable_offline_email_notifications: boolean;
		/**
		 * Enable mobile notification for direct messages and @-mentions received
		 * when the user is offline.
		 */
		enable_offline_push_notifications: boolean;
		/**
		 * Enable mobile notification for direct messages and @-mentions received
		 * when the user is online.
		 */
		enable_online_push_notifications: boolean;
		/**
		 * Enable visual desktop notifications for messages sent to followed topics.
		 *
		 * New in Zulip 8.0 (feature level 189).
		 */
		enable_followed_topic_desktop_notifications: boolean;
		/**
		 * Enable email notifications for messages sent to followed topics.
		 *
		 * New in Zulip 8.0 (feature level 189).
		 */
		enable_followed_topic_email_notifications: boolean;
		/**
		 * Enable push notifications for messages sent to followed topics.
		 *
		 * New in Zulip 8.0 (feature level 189).
		 */
		enable_followed_topic_push_notifications: boolean;
		/**
		 * Enable audible desktop notifications for messages sent to followed topics.
		 *
		 * New in Zulip 8.0 (feature level 189).
		 */
		enable_followed_topic_audible_notifications: boolean;
		/** Enable digest emails when the user is away. */
		enable_digest_emails: boolean;
		/** Enable marketing emails. Has no function outside Zulip Cloud. */
		enable_marketing_emails: boolean;
		/** Enable email notifications for new logins to account. */
		enable_login_emails: boolean;
		/** Include the message's content in email notifications for new messages. */
		message_content_in_email_notifications: boolean;
		/** Include content of direct messages in desktop notifications. */
		pm_content_in_desktop_notifications: boolean;
		/**
		 * Whether wildcard mentions (E.g. @**all**) should send notifications
		 * like a personal mention.
		 */
		wildcard_mentions_notify: boolean;
		/**
		 * Whether wildcard mentions (e.g., @**all**) in messages sent to followed topics
		 * should send notifications like a personal mention.
		 *
		 * New in Zulip 8.0 (feature level 189).
		 */
		enable_followed_topic_wildcard_mentions_notify: boolean;
		/** Unread count badge (appears in desktop sidebar and browser tab) */
		desktop_icon_count_display: number;
		/**
		 * Whether to [include organization name in subject of message notification
		 * emails](https://zulip.com/help/email-notifications#include-organization-name-in-subject-line).
		 *
		 * New in Zulip 7.0 (feature level 168).
		 */
		realm_name_in_email_notifications_policy: number;
		/**
		 * Which [topics to follow automatically](https://zulip.com/help/mute-a-topic).
		 *
		 * New in Zulip 8.0 (feature level 214).
		 */
		automatically_follow_topics_policy: number;
		/**
		 * Which [topics to unmute automatically in muted channels](https://zulip.com/help/mute-a-topic).
		 *
		 * New in Zulip 8.0 (feature level 214).
		 */
		automatically_unmute_topics_in_muted_streams_policy: number;
		/**
		 * Whether the server will automatically mark the user as following
		 * topics where the user is mentioned.
		 *
		 * New in Zulip 8.0 (feature level 235).
		 */
		automatically_follow_topics_where_mentioned: boolean;
		/**
		 * Controls whether the resolved-topic notices are marked as read.
		 *
		 * New in Zulip 11.0 (feature level 385).
		 */
		resolved_topic_notice_auto_read_policy: string;
		/** Display the presence status to other users when online. */
		presence_enabled: boolean;
		/**
		 * Whether the user setting for [sending on pressing Enter](https://zulip.com/help/configure-send-message-keys)
		 * in the compose box is enabled.
		 */
		enter_sends: boolean;
		/**
		 * A boolean parameter to control whether synchronizing drafts is enabled for
		 * the user. When synchronization is disabled, all drafts stored in the server
		 * will be automatically deleted from the server.
		 */
		enable_drafts_synchronization: boolean;
		/**
		 * The duration (in seconds) for which the server should wait to batch
		 * email notifications before sending them.
		 */
		email_notifications_batching_period_seconds: number;
		/**
		 * Array containing the names of the notification sound options
		 * supported by this Zulip server. Only relevant to support UI
		 * for configuring notification sounds.
		 */
		available_notification_sounds: string[];
		/**
		 * Array of dictionaries where each dictionary describes an emoji set
		 * supported by this version of the Zulip server.
		 */
		emojiset_choices: {
			/**
			 * The key or the name of the emoji set which will be the value
			 * of `emojiset` if this emoji set is chosen.
			 */
			key: string;
			/** The text describing the emoji set. */
			text: string;
		}[];
		/**
		 * Whether [typing notifications](https://zulip.com/help/typing-notifications) be sent when composing
		 * direct messages.
		 *
		 * New in Zulip 5.0 (feature level 105).
		 */
		send_private_typing_notifications: boolean;
		/**
		 * Whether [typing notifications](https://zulip.com/help/typing-notifications) be sent when composing
		 * channel messages.
		 *
		 * New in Zulip 5.0 (feature level 105).
		 */
		send_stream_typing_notifications: boolean;
		/**
		 * Whether other users are allowed to see whether you've
		 * read messages.
		 *
		 * New in Zulip 5.0 (feature level 105).
		 */
		send_read_receipts: boolean;
		/**
		 * Whether organization administrators are allowed to
		 * export your private data.
		 *
		 * New in Zulip 10.0 (feature level 293).
		 */
		allow_private_data_export: boolean;
		/**
		 * The [policy][permission-level] for [which other users][help-email-visibility]
		 * in this organization can see the user's real email address.
		 *
		 * New in Zulip 7.0 (feature level 163).
		 */
		email_address_visibility: EmailAddressVisibility;
		/**
		 * Web/desktop app setting for whether the user's view should
		 * automatically go to the conversation where they sent a message.
		 *
		 * New in Zulip 9.0 (feature level 268).
		 */
		web_navigate_to_sent_message: boolean;
	};
	/** Present if `realm_user` is present in `fetch_event_types`. */
	realm_users?: User[];
	/** Present if `realm_user` is present in `fetch_event_types`. */
	realm_non_active_users?: User[];
	/** Present if `realm_user` is present in `fetch_event_types`. */
	avatar_source?: string;
	/** Present if `realm_user` is present in `fetch_event_types`. */
	avatar_url_medium?: string;
	/** Present if `realm_user` is present in `fetch_event_types`. */
	avatar_url?: string;
	/**
	 * Present if `realm_user` is present in `fetch_event_types`.
	 * @deprecated
	 */
	can_create_streams?: boolean;
	/**
	 * Present if `realm_user` is present in `fetch_event_types`.
	 *
	 * New in Zulip 5.0 (feature level 102).
	 */
	can_create_public_streams?: boolean;
	/**
	 * Present if `realm_user` is present in `fetch_event_types`.
	 *
	 * New in Zulip 5.0 (feature level 102).
	 */
	can_create_private_streams?: boolean;
	/**
	 * Present if `realm_user` is present in `fetch_event_types`.
	 *
	 * New in Zulip 5.0 (feature level 103).
	 */
	can_create_web_public_streams?: boolean;
	/** Present if `realm_user` is present in `fetch_event_types`. */
	can_subscribe_other_users?: boolean;
	/**
	 * Present if `realm_user` is present in `fetch_event_types`.
	 *
	 * New in Zulip 4.0 (feature level 51).
	 */
	can_invite_others_to_realm?: boolean;
	/** Present if `realm_user` is present in `fetch_event_types`. */
	is_admin?: boolean;
	/**
	 * Present if `realm_user` is present in `fetch_event_types`.
	 *
	 * New in Zulip 3.0 (feature level 11).
	 */
	is_owner?: boolean;
	/**
	 * Present if `realm_user` is present in `fetch_event_types`.
	 *
	 * New in Zulip 4.0 (feature level 60).
	 */
	is_moderator?: boolean;
	/** Present if `realm_user` is present in `fetch_event_types`. */
	is_guest?: boolean;
	/** Present if `realm_user` is present in `fetch_event_types`. */
	user_id?: number;
	/** Present if `realm_user` is present in `fetch_event_types`. */
	email?: string;
	/** Present if `realm_user` is present in `fetch_event_types`. */
	delivery_email?: string;
	/** Present if `realm_user` is present in `fetch_event_types`. */
	full_name?: string;
	/** Present if `realm_user` is present in `fetch_event_types`. */
	cross_realm_bots?: (UserBase & {
		user_id?: unknown;
		delivery_email?: unknown;
		email?: unknown;
		full_name?: unknown;
		date_joined?: unknown;
		is_active?: unknown;
		is_owner?: unknown;
		is_admin?: unknown;
		is_guest?: unknown;
		is_bot?: unknown;
		/**
		 * Whether the user is a system bot. System bots are special
		 * bot user accounts that are managed by the system, rather than
		 * the organization's administrators.
		 */
		is_system_bot: boolean;
		bot_type: unknown;
		bot_owner_id: unknown;
		role?: unknown;
		timezone?: unknown;
		avatar_url: unknown;
		avatar_version?: unknown;
		is_imported_stub?: unknown;
	})[];
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 12.0 (feature level 435).
	 */
	server_report_message_types?: {
		/** The unique ID for the report message type. */
		key: string;
		/**
		 * The user-facing string for the report message type, to be
		 * displayed in the report message UI, in the user's language.
		 * Note that the actual report will use the name for this type
		 * in the organization's default language.
		 */
		name: string;
	}[];
	/**
	 * Present if `realm` is present in `fetch_event_types`.
	 *
	 * New in Zulip 8.0 (feature level 221).
	 */
	server_supported_permission_settings?: {
		/** Configuration for realm level group permission settings. */
		realm: Record<string, GroupPermissionSetting>;
		/** Configuration for channel level group permission settings. */
		stream: Record<string, GroupPermissionSetting>;
		/** Configuration for group level group permission settings. */
		group: Record<string, GroupPermissionSetting>;
	};
	/**
	 * Maximum number of new subscribers for which the server will
	 * respect the `send_new_subscription_messages` parameter when
	 * [adding subscribers to a channel](https://zulip.com/api/subscribe#parameter-send_new_subscription_messages).
	 *
	 * New in Zulip 11.0 (feature level 397).
	 */
	max_bulk_new_subscription_messages: number;
});

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type GetServerSettingsParams = {};

export type GetServerSettingsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * Each key-value pair in the object indicates whether the authentication
	 * method is enabled on this server.
	 * @deprecated
	 */
	authentication_methods: {
		/** Whether the user can authenticate using password. */
		password: boolean;
		/** Whether the user can authenticate using development API key. */
		dev: boolean;
		/** Whether the user can authenticate using email. */
		email: boolean;
		/** Whether the user can authenticate using LDAP. */
		ldap: boolean;
		/** Whether the user can authenticate using REMOTE_USER. */
		remoteuser: boolean;
		/** Whether the user can authenticate using their GitHub account. */
		github: boolean;
		/** Whether the user can authenticate using their Microsoft Entra ID account. */
		azuread: boolean;
		/**
		 * Whether the user can authenticate using their GitLab account.
		 *
		 * New in Zulip 3.0 (feature level 1).
		 */
		gitlab: boolean;
		/** Whether the user can authenticate using their Apple account. */
		apple: boolean;
		/** Whether the user can authenticate using their Google account. */
		google: boolean;
		/** Whether the user can authenticate using SAML. */
		saml: boolean;
		/** Whether the user can authenticate using OpenID Connect. */
		"openid connect": boolean;
		/**
		 * Whether the user can authenticate using their Discord account.
		 *
		 * New in Zulip 12.0 (feature level 488).
		 */
		discord: boolean;
	};
	/**
	 * A list of dictionaries describing the available external
	 * authentication methods (E.g. Google, GitHub, or SAML)
	 * enabled for this organization.
	 */
	external_authentication_methods: {
		/**
		 * A unique, table, machine-readable name for the authentication method,
		 * intended to be used by clients with special behavior for specific
		 * authentication methods to correctly identify the method.
		 */
		name: string;
		/**
		 * Display name of the authentication method, to be used in all buttons
		 * for the authentication method.
		 */
		display_name: string;
		/**
		 * URL for an image to be displayed as an icon in all buttons for
		 * the external authentication method. This URL should be resolved
		 * relative to the server's base URL.
		 */
		display_icon: string | null;
		/** URL to be used to initiate authentication using this method. */
		login_url: string;
		/** URL to be used to initiate account registration using this method. */
		signup_url: string;
	}[];
	/**
	 * An integer indicating what features are
	 * available on the server. The feature level increases monotonically;
	 * a value of N means the server supports all API features introduced
	 * before feature level N. This is designed to provide a simple way
	 * for client apps to decide whether the server supports a given
	 * feature or API change. See the [changelog](https://zulip.com/api/changelog) for
	 * details on what each feature level means.
	 *
	 * New in Zulip 3.0 (feature level 1).
	 */
	zulip_feature_level: number;
	/**
	 * The server's version number. This is often a release version number,
	 * like `2.1.7`. But for a server running a [version from Git][git-release],
	 * it will be a Git reference to the commit, like `5.0-dev-1650-gc3fd37755f`.
	 */
	zulip_version: string;
	/**
	 * The `git merge-base` between `zulip_version` and official branches
	 * in the public
	 * [Zulip server and web app repository](https://github.com/zulip/zulip),
	 * in the same format as `zulip_version`. This will equal
	 * `zulip_version` if the server is not running a fork of the Zulip server.
	 *
	 * New in Zulip 5.0 (feature level 88).
	 */
	zulip_merge_base: string;
	/** Whether mobile/push notifications are configured. */
	push_notifications_enabled: boolean;
	/**
	 * Whether the Zulip client that has sent a request to this endpoint is
	 * deemed incompatible with the server.
	 */
	is_incompatible: boolean;
	/**
	 * Setting for allowing users authenticate with an email-password
	 * combination.
	 */
	email_auth_enabled: boolean;
	/**
	 * Whether all valid usernames for authentication to this
	 * organization will be email addresses. This is important
	 * for clients to know whether to do client side validation
	 * of email address format in a login prompt.
	 */
	require_email_format_usernames: boolean;
	/**
	 * The organization's canonical URL. Alias of `realm_url`.
	 * @deprecated
	 */
	realm_uri: string;
	/**
	 * The organization's canonical URL.
	 *
	 * New in Zulip 9.0 (feature level 257).
	 */
	realm_url: string;
	/** The organization's name (for display purposes). */
	realm_name: string;
	/**
	 * The URL for the organization's logo formatted as a square image,
	 * used for identifying the organization in small locations in the
	 * mobile and desktop apps.
	 */
	realm_icon: string;
	/**
	 * HTML description of the organization, as configured by the [organization
	 * profile](https://zulip.com/help/create-your-organization-profile).
	 */
	realm_description: string;
	/**
	 * Whether the organization has enabled the creation of
	 * [web-public channels](https://zulip.com/help/public-access-option) and
	 * at least one web-public channel on the server currently
	 * exists. Clients that support viewing content
	 * in web-public channels without an account can
	 * use this to determine whether to offer that
	 * feature on the login page for an organization.
	 *
	 * New in Zulip 5.0 (feature level 116).
	 */
	realm_web_public_access_enabled: boolean;
};

export interface UpdateSettingsParams {
	/**
	 * An object specifying the collection of users whose settings should be modified,
	 * for modification of other users' settings by an organization administrator.
	 * When this parameter is absent, this API endpoint always modifies the current
	 * user's own settings.
	 *
	 * New in Zulip 12.0 (feature level 444).
	 */
	target_users?: {
		/** A list of integer user IDs representing individual users whose settings will be updated. */
		user_ids?: number[];
		/**
		 * A list of integer group IDs representing user groups, where settings will be applied to
		 * all active members of the specified groups.
		 */
		group_ids?: number[];
		/**
		 * Whether to skip editing the settings of users who have previously edited their settings,
		 * which can be useful for adjusting a default without overriding users' own directly
		 * expressed preferences.
		 */
		skip_if_already_edited?: boolean;
	};
	/** A new display name for the user. */
	full_name?: string;
	/**
	 * Asks the server to initiate a confirmation sequence to change the user's email
	 * address to the indicated value. The user will need to demonstrate control of the
	 * new email address by clicking a confirmation link sent to that address.
	 */
	email?: string;
	/** The user's old Zulip password (or LDAP password, if LDAP authentication is in use). */
	old_password?: string;
	/** The user's new Zulip password (or LDAP password, if LDAP authentication is in use). */
	new_password?: string;
	/** Whether time should be [displayed in 24-hour notation](https://zulip.com/help/change-the-time-format). */
	twenty_four_hour_time?: boolean;
	/**
	 * Whether or not to mark messages as read when the user scrolls through their
	 * feed.
	 *
	 * New in Zulip 7.0 (feature level 175).
	 */
	web_mark_read_on_scroll_policy?: 1 | 2 | 3;
	/**
	 * Web/desktop app setting controlling the default navigation
	 * behavior when clicking on a channel link.
	 *
	 * New in Zulip 9.0 (feature level 269).
	 */
	web_channel_default_view?: 1 | 2 | 4;
	/**
	 * Whether clients should display the [number of starred
	 * messages](https://zulip.com/help/star-a-message#display-the-number-of-starred-messages).
	 */
	starred_message_counts?: boolean;
	/**
	 * Whether the user is configured to receive typing notifications from other users.
	 * The server will only deliver typing notifications events to users who for whom this
	 * is enabled.
	 *
	 * New in Zulip 9.0 (feature level 253).
	 */
	receives_typing_notifications?: boolean;
	/**
	 * Whether the user should be shown an alert, offering to update their
	 * [profile time zone](https://zulip.com/help/change-your-timezone), when the time displayed
	 * for the profile time zone differs from the current time displayed by the
	 * time zone configured on their device.
	 *
	 * New in Zulip 10.0 (feature level 329).
	 */
	web_suggest_update_timezone?: boolean;
	/**
	 * Whether to use the [maximum available screen width](https://zulip.com/help/enable-full-width-display)
	 * for the web app's center panel (message feed, recent conversations) on wide screens.
	 */
	fluid_layout_width?: boolean;
	/**
	 * This setting is reserved for use to control variations in Zulip's design
	 * to help visually impaired users.
	 */
	high_contrast_mode?: boolean;
	/**
	 * User-configured primary `font-size` for the web application, in pixels.
	 *
	 * New in Zulip 9.0 (feature level 245).
	 */
	web_font_size_px?: number;
	/**
	 * User-configured primary `line-height` for the web application, in percent, so a
	 * value of 120 represents a `line-height` of 1.2.
	 *
	 * New in Zulip 9.0 (feature level 245).
	 */
	web_line_height_percent?: number;
	/** Controls which [color theme](https://zulip.com/help/dark-theme) to use. */
	color_scheme?: 1 | 2 | 3;
	/**
	 * A boolean parameter to control whether synchronizing drafts is enabled for
	 * the user. When synchronization is disabled, all drafts stored in the server
	 * will be automatically deleted from the server.
	 *
	 * New in Zulip 5.0 (feature level 87).
	 */
	enable_drafts_synchronization?: boolean;
	/**
	 * Whether to [translate emoticons to emoji](https://zulip.com/help/configure-emoticon-translations)
	 * in messages the user sends.
	 */
	translate_emoticons?: boolean;
	/**
	 * Whether to display the names of reacting users on a message.
	 *
	 * New in Zulip 6.0 (feature level 125).
	 */
	display_emoji_reaction_users?: boolean;
	/** What [default language](https://zulip.com/help/change-your-language) to use for the account. */
	default_language?: string;
	/**
	 * The [home view](https://zulip.com/help/configure-home-view) used when opening a new
	 * Zulip web app window or hitting the `Esc` keyboard shortcut repeatedly.
	 *
	 * New in Zulip 8.0 (feature level 219).
	 */
	web_home_view?: string;
	/**
	 * Whether the escape key navigates to the
	 * [configured home view](https://zulip.com/help/configure-home-view).
	 *
	 * New in Zulip 8.0 (feature level 219).
	 */
	web_escape_navigates_to_home_view?: boolean;
	/** Whether the users list on left sidebar in narrow windows. */
	left_side_userlist?: boolean;
	/**
	 * The user's configured [emoji set](https://zulip.com/help/emoji-and-emoticons#use-emoticons),
	 * used to display emoji to the user everywhere they appear in the UI.
	 */
	emojiset?: string;
	/** Whether to [hide inactive channels](https://zulip.com/help/manage-inactive-channels) in the left sidebar. */
	demote_inactive_streams?: 1 | 2 | 3;
	/**
	 * The style selected by the user for the right sidebar user list.
	 *
	 * New in Zulip 6.0 (feature level 141).
	 */
	user_list_style?: 1 | 2 | 3;
	/**
	 * Controls how animated images should be played in the message feed in the web/desktop application.
	 *
	 * New in Zulip 9.0 (feature level 275).
	 */
	web_animate_image_previews?: "always" | "on_hover" | "never";
	/**
	 * Configuration for which channels should be displayed with a numeric unread count in the left sidebar.
	 * Channels that do not have an unread count will have a simple dot indicator for whether there are any
	 * unread messages.
	 *
	 * New in Zulip 8.0 (feature level 210).
	 */
	web_stream_unreads_count_display_policy?: 1 | 2 | 3;
	/**
	 * Controls whether user wants AI features like topic summarization to
	 * be hidden in all Zulip clients.
	 *
	 * New in Zulip 10.0 (feature level 350).
	 */
	hide_ai_features?: boolean;
	/**
	 * Determines whether [channel folders](https://zulip.com/help/channel-folders)
	 * are used to organize how conversations with unread messages
	 * are displayed in the web/desktop application's Inbox view.
	 *
	 * New in Zulip 12.0 (feature level 431).
	 */
	web_inbox_show_channel_folders?: boolean;
	/**
	 * Determines whether [channel folders](https://zulip.com/help/channel-folders)
	 * are used to organize how channels are displayed in the
	 * web/desktop application's left sidebar.
	 *
	 * New in Zulip 11.0 (feature level 411).
	 */
	web_left_sidebar_show_channel_folders?: boolean;
	/**
	 * Determines whether the web/desktop application's left sidebar displays
	 * the unread message count summary.
	 *
	 * New in Zulip 11.0 (feature level 398).
	 */
	web_left_sidebar_unreads_count_summary?: boolean;
	/**
	 * The IANA identifier of the user's [profile time zone](https://zulip.com/help/change-your-timezone),
	 * which is used primarily to display the user's local time to other users.
	 */
	timezone?: string;
	/** Enable visual desktop notifications for channel messages. */
	enable_stream_desktop_notifications?: boolean;
	/** Enable email notifications for channel messages. */
	enable_stream_email_notifications?: boolean;
	/** Enable mobile notifications for channel messages. */
	enable_stream_push_notifications?: boolean;
	/** Enable audible desktop notifications for channel messages. */
	enable_stream_audible_notifications?: boolean;
	/** Notification sound name. */
	notification_sound?: string;
	/** Enable visual desktop notifications for direct messages and @-mentions. */
	enable_desktop_notifications?: boolean;
	/**
	 * Enable audible desktop notifications for direct messages and
	 * @-mentions.
	 */
	enable_sounds?: boolean;
	/**
	 * The duration (in seconds) for which the server should wait to batch
	 * email notifications before sending them.
	 *
	 * New in Zulip 5.0 (feature level 82).
	 */
	email_notifications_batching_period_seconds?: number;
	/**
	 * Enable email notifications for direct messages and @-mentions received
	 * when the user is offline.
	 */
	enable_offline_email_notifications?: boolean;
	/**
	 * Enable mobile notification for direct messages and @-mentions received
	 * when the user is offline.
	 */
	enable_offline_push_notifications?: boolean;
	/**
	 * Enable mobile notification for direct messages and @-mentions received
	 * when the user is online.
	 */
	enable_online_push_notifications?: boolean;
	/**
	 * Enable visual desktop notifications for messages sent to followed topics.
	 *
	 * New in Zulip 8.0 (feature level 189).
	 */
	enable_followed_topic_desktop_notifications?: boolean;
	/**
	 * Enable email notifications for messages sent to followed topics.
	 *
	 * New in Zulip 8.0 (feature level 189).
	 */
	enable_followed_topic_email_notifications?: boolean;
	/**
	 * Enable push notifications for messages sent to followed topics.
	 *
	 * New in Zulip 8.0 (feature level 189).
	 */
	enable_followed_topic_push_notifications?: boolean;
	/**
	 * Enable audible desktop notifications for messages sent to followed topics.
	 *
	 * New in Zulip 8.0 (feature level 189).
	 */
	enable_followed_topic_audible_notifications?: boolean;
	/** Enable digest emails when the user is away. */
	enable_digest_emails?: boolean;
	/** Enable marketing emails. Has no function outside Zulip Cloud. */
	enable_marketing_emails?: boolean;
	/** Enable email notifications for new logins to account. */
	enable_login_emails?: boolean;
	/** Include the message's content in email notifications for new messages. */
	message_content_in_email_notifications?: boolean;
	/** Include content of direct messages in desktop notifications. */
	pm_content_in_desktop_notifications?: boolean;
	/**
	 * Whether wildcard mentions (E.g. @**all**) should send notifications
	 * like a personal mention.
	 */
	wildcard_mentions_notify?: boolean;
	/**
	 * Whether wildcard mentions (e.g., @**all**) in messages sent to followed topics
	 * should send notifications like a personal mention.
	 *
	 * New in Zulip 8.0 (feature level 189).
	 */
	enable_followed_topic_wildcard_mentions_notify?: boolean;
	/** Unread count badge (appears in desktop sidebar and browser tab) */
	desktop_icon_count_display?: 1 | 2 | 3 | 4;
	/**
	 * Whether to [include organization name in subject of message notification
	 * emails](https://zulip.com/help/email-notifications#include-organization-name-in-subject-line).
	 *
	 * New in Zulip 7.0 (feature level 168).
	 */
	realm_name_in_email_notifications_policy?: 1 | 2 | 3;
	/**
	 * Which [topics to follow automatically](https://zulip.com/help/mute-a-topic).
	 *
	 * New in Zulip 8.0 (feature level 214).
	 */
	automatically_follow_topics_policy?: 1 | 2 | 3 | 4;
	/**
	 * Which [topics to unmute automatically in muted channels](https://zulip.com/help/mute-a-topic).
	 *
	 * New in Zulip 8.0 (feature level 214).
	 */
	automatically_unmute_topics_in_muted_streams_policy?: 1 | 2 | 3 | 4;
	/**
	 * Whether the server will automatically mark the user as following
	 * topics where the user is mentioned.
	 *
	 * New in Zulip 8.0 (feature level 235).
	 */
	automatically_follow_topics_where_mentioned?: boolean;
	/**
	 * Controls whether the resolved-topic notices are marked as read.
	 *
	 * New in Zulip 11.0 (feature level 385).
	 */
	resolved_topic_notice_auto_read_policy?: "always" | "except_followed" | "never";
	/** Display the presence status to other users when online. */
	presence_enabled?: boolean;
	/**
	 * Whether pressing Enter in the compose box sends a message
	 * (or saves a message edit).
	 */
	enter_sends?: boolean;
	/**
	 * Whether [typing notifications](https://zulip.com/help/typing-notifications) be sent when composing
	 * direct messages.
	 *
	 * New in Zulip 5.0 (feature level 105).
	 */
	send_private_typing_notifications?: boolean;
	/**
	 * Whether [typing notifications](https://zulip.com/help/typing-notifications) be sent when composing
	 * channel messages.
	 *
	 * New in Zulip 5.0 (feature level 105).
	 */
	send_stream_typing_notifications?: boolean;
	/**
	 * Whether other users are allowed to see whether you've
	 * read messages.
	 *
	 * New in Zulip 5.0 (feature level 105).
	 */
	send_read_receipts?: boolean;
	/**
	 * Whether organization administrators are allowed to
	 * export your private data.
	 *
	 * New in Zulip 10.0 (feature level 293).
	 */
	allow_private_data_export?: boolean;
	/**
	 * The [policy][permission-level] this user has selected for [which other
	 * users][help-email-visibility] in this organization can see their real
	 * email address.
	 *
	 * New in Zulip 7.0 (feature level 163).
	 */
	email_address_visibility?: 1 | 2 | 3 | 4 | 5;
	/**
	 * Web/desktop app setting for whether the user's view should
	 * automatically go to the conversation where they sent a message.
	 *
	 * New in Zulip 9.0 (feature level 268).
	 */
	web_navigate_to_sent_message?: boolean;
}

export type UpdateSettingsResponse = IgnoredParametersSuccess;

export interface GetSubscribersParams {
	/** The ID of the channel to access. */
	stream_id: number;
}

export type GetSubscribersResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/**
	 * A list containing the IDs of all active users who are subscribed
	 * to the channel.
	 */
	subscribers: number[];
};

export interface GetStreamsParams {
	/** Include all public channels. */
	include_public?: boolean;
	/** Include all web-public channels. */
	include_web_public?: boolean;
	/** Include all channels that the user is subscribed to. */
	include_subscribed?: boolean;
	/**
	 * Whether to exclude archived streams from the results.
	 *
	 * New in Zulip 10.0 (feature level 315).
	 */
	exclude_archived?: boolean;
	/**
	 * Deprecated parameter to include all channels. The user must
	 * have administrative privileges to use this parameter.
	 * @deprecated
	 */
	include_all_active?: boolean;
	/**
	 * Include all channels that the user has metadata access to.
	 *
	 * New in Zulip 10.0 (feature level 356).
	 */
	include_all?: boolean;
	/** Include all default channels for the user's realm. */
	include_default?: boolean;
	/**
	 * If the user is a bot, include all channels that the bot's owner is
	 * subscribed to.
	 */
	include_owner_subscribed?: boolean;
	/**
	 * Include all the channels that the user has content access to.
	 *
	 * New in Zulip 10.0 (feature level 356).
	 */
	include_can_access_content?: boolean;
}

export type GetStreamsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** A list of channel objects with details on the requested channels. */
	streams: (BasicChannelBase & {
		stream_id: unknown;
		name: unknown;
		is_archived: unknown;
		description: unknown;
		date_created: unknown;
		creator_id: unknown;
		invite_only: unknown;
		rendered_description: unknown;
		is_web_public: unknown;
		stream_post_policy: unknown;
		message_retention_days: unknown;
		history_public_to_subscribers: unknown;
		topics_policy?: unknown;
		first_message_id: unknown;
		folder_id: unknown;
		is_recently_active: unknown;
		is_announcement_only: unknown;
		can_add_subscribers_group?: unknown;
		can_remove_subscribers_group: unknown;
		can_administer_channel_group?: unknown;
		can_delete_any_message_group?: unknown;
		can_delete_own_message_group?: unknown;
		can_move_messages_out_of_channel_group?: unknown;
		can_move_messages_within_channel_group?: unknown;
		can_send_message_group?: unknown;
		can_resolve_topics_group?: unknown;
		can_subscribe_group: unknown;
		can_create_topic_group?: unknown;
		subscriber_count: unknown;
		/**
		 * The average number of messages sent to the channel per week, as
		 * estimated based on recent weeks, rounded to the nearest integer.
		 *
		 * New in Zulip 8.0 (feature level 199).
		 */
		stream_weekly_traffic: number | null;
		/**
		 * Only present when [`include_default`][include_default]
		 * parameter is `true`.
		 */
		is_default?: boolean;
	})[];
};

export interface GetStreamByIdParams {
	/** The ID of the channel to access. */
	stream_id: number;
}

export type GetStreamByIdResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	stream: BasicChannel;
};

export interface ArchiveStreamParams {
	/** The ID of the channel to access. */
	stream_id: number;
}

export type ArchiveStreamResponse = JsonSuccess;

export interface UpdateStreamParams {
	/** The ID of the channel to access. */
	stream_id: number;
	/**
	 * The new [description](https://zulip.com/help/change-the-channel-description) for
	 * the channel, in [Zulip-flavored Markdown](https://zulip.com/help/format-your-message-using-markdown) format.
	 */
	description?: string;
	/** The new name for the channel. */
	new_name?: string;
	/** Change whether the channel is a private channel. */
	is_private?: boolean;
	/**
	 * Change whether the channel is a web-public channel.
	 *
	 * New in Zulip 5.0 (feature level 98).
	 */
	is_web_public?: boolean;
	/**
	 * Whether the channel's message history should be available to
	 * newly subscribed members, or users can only access messages
	 * they actually received while subscribed to the channel.
	 */
	history_public_to_subscribers?: boolean;
	/**
	 * Add or remove the channel as a [default channel][default-channel]
	 * for new users joining the organization.
	 *
	 * New in Zulip 8.0 (feature level 200).
	 */
	is_default_stream?: boolean;
	/**
	 * Number of days that messages sent to this channel will be stored
	 * before being automatically deleted by the [message retention
	 * policy](https://zulip.com/help/message-retention-policy). Two special string format
	 * values are supported:
	 *
	 * New in Zulip 3.0 (feature level 17).
	 */
	message_retention_days?: MessageRetentionDays;
	/**
	 * A boolean indicating whether the channel is
	 * [archived](https://zulip.com/help/archive-a-channel) or
	 * unarchived. Currently only allows unarchiving
	 * previously archived channels.
	 *
	 * New in Zulip 11.0 (feature level 388).
	 */
	is_archived?: boolean;
	/**
	 * ID of the new [channel folder](https://zulip.com/help/channel-folders) to which the
	 * channel should belong.
	 *
	 * New in Zulip 11.0 (feature level 389).
	 */
	folder_id?: number | null;
	/**
	 * Whether [named topics](https://zulip.com/help/introduction-to-topics) and the empty
	 * topic (i.e., ["general chat" topic](https://zulip.com/help/general-chat-topic))
	 * are enabled in this channel.
	 *
	 * New in Zulip 11.0 (feature level 392).
	 */
	topics_policy?: TopicsPolicy;
	can_add_subscribers_group?: GroupSettingValueUpdate;
	can_remove_subscribers_group?: GroupSettingValueUpdate;
	can_administer_channel_group?: GroupSettingValueUpdate;
	can_delete_any_message_group?: GroupSettingValueUpdate;
	can_delete_own_message_group?: GroupSettingValueUpdate;
	can_move_messages_out_of_channel_group?: GroupSettingValueUpdate;
	can_move_messages_within_channel_group?: GroupSettingValueUpdate;
	can_send_message_group?: GroupSettingValueUpdate;
	can_subscribe_group?: GroupSettingValueUpdate;
	can_resolve_topics_group?: GroupSettingValueUpdate;
	can_create_topic_group?: GroupSettingValueUpdate;
}

export type UpdateStreamResponse = JsonSuccess;

export interface GetStreamEmailAddressParams {
	/** The ID of the channel to access. */
	stream_id: number;
	/**
	 * The ID of a user or bot which should appear as the sender when messages
	 * are sent to the channel using the returned channel email address.
	 *
	 * New in Zulip 10.0 (feature level 335).
	 */
	sender_id?: number;
}

export type GetStreamEmailAddressResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** Email address of the channel. */
	email: string;
};

export interface DeleteTopicParams {
	/** The ID of the channel to access. */
	stream_id: number;
	/** The name of the topic to delete. */
	topic_name: string;
}

export type DeleteTopicResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** Whether all unread messages were marked as read. */
	complete: boolean;
};

export interface SetTypingStatusParams {
	/**
	 * Type of the message being composed.
	 *
	 * New in Zulip 4.0 (feature level 58).
	 */
	type?: "direct" | "stream" | "channel";
	/** Whether the user has started (`"start"`) or stopped (`"stop"`) typing. */
	op: "start" | "stop";
	/**
	 * User IDs of the recipients of the message being typed. Required for the
	 * `"direct"` type. Ignored in the case of `"stream"` or `"channel"` type.
	 */
	to?: number[];
	/**
	 * ID of the channel in which the message is being typed. Required for the `"stream"`
	 * or `"channel"` type. Ignored in the case of `"direct"` type.
	 *
	 * New in Zulip 8.0 (feature level 215).
	 */
	stream_id?: number;
	/**
	 * Topic to which message is being typed. Required for the `"stream"` or `"channel"`
	 * type. Ignored in the case of `"direct"` type.
	 *
	 * New in Zulip 4.0 (feature level 58).
	 */
	topic?: string;
}

export type SetTypingStatusResponse = JsonSuccess;

export interface SetTypingStatusForMessageEditParams {
	/** The target message's ID. */
	message_id: number;
	/** Whether the user has started (`"start"`) or stopped (`"stop"`) editing. */
	op: "start" | "stop";
}

export type SetTypingStatusForMessageEditResponse = JsonSuccess;

export interface CreateChannelParams {
	/** The name of the new channel. */
	name: string;
	/**
	 * The [description](https://zulip.com/help/change-the-channel-description)
	 * to use for the new channel being created, in text/markdown format.
	 */
	description?: string;
	/** A list of user IDs of the users to be subscribed to the new channel. */
	subscribers: number[];
	/**
	 * This determines whether [notification bot](https://zulip.com/help/configure-automated-notices)
	 * will send an announcement about the new channel's creation.
	 */
	announce?: boolean;
	/**
	 * This parameter and the ones that follow are used to request an initial
	 * configuration of the new channel.
	 */
	invite_only?: boolean;
	/**
	 * This parameter determines whether the newly created channel will be
	 * a web-public channel.
	 */
	is_web_public?: boolean;
	/**
	 * This parameter determines whether the newly created channel will be
	 * added as a [default channel][default-channels] for new users joining
	 * the organization.
	 */
	is_default_stream?: boolean;
	/**
	 * This parameter adds the newly created channel to the specified
	 * [channel folder](https://zulip.com/help/channel-folders).
	 *
	 * New in Zulip 11.0 (feature level 389).
	 */
	folder_id?: number;
	/**
	 * Whether [named topics](https://zulip.com/help/introduction-to-topics) and the empty
	 * topic (i.e., ["general chat" topic](https://zulip.com/help/general-chat-topic))
	 * are enabled in this channel.
	 *
	 * New in Zulip 11.0 (feature level 392).
	 */
	topics_policy?: TopicsPolicy;
	/**
	 * Whether the channel's message history should be available to
	 * newly subscribed members, or users can only access messages
	 * they actually received while subscribed to the channel.
	 */
	history_public_to_subscribers?: HistoryPublicToSubscribers;
	/**
	 * Number of days that messages sent to this channel will be stored
	 * before being automatically deleted by the [message retention
	 * policy](https://zulip.com/help/message-retention-policy). Two special string format
	 * values are supported:
	 *
	 * New in Zulip 3.0 (feature level 17).
	 */
	message_retention_days?: MessageRetentionDays;
	can_add_subscribers_group?: ChannelCanAddSubscribersGroup;
	can_create_topic_group?: CanCreateTopicGroup;
	can_delete_any_message_group?: CanDeleteAnyMessageGroup;
	can_delete_own_message_group?: CanDeleteOwnMessageGroup;
	can_remove_subscribers_group?: CanRemoveSubscribersGroup;
	can_administer_channel_group?: CanAdministerChannelGroup;
	can_move_messages_out_of_channel_group?: CanMoveMessagesOutOfChannelGroup;
	can_move_messages_within_channel_group?: CanMoveMessagesWithinChannelGroup;
	can_send_message_group?: CanSendMessageGroup;
	can_subscribe_group?: CanSubscribeGroup;
	can_resolve_topics_group?: CanResolveTopicsGroup;
}

export type CreateChannelResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The ID of the newly created channel. */
	id: number;
};

export interface CreateUserGroupParams {
	/** The name of the user group. */
	name: string;
	/** The description of the user group. */
	description: string;
	/**
	 * An array containing the user IDs of the initial members for the
	 * new user group.
	 */
	members: number[];
	/**
	 * An array containing the IDs of the initial subgroups for the new
	 * user group.
	 *
	 * New in Zulip 10.0 (feature level 311).
	 */
	subgroups?: number[];
	can_add_members_group?: GroupSettingValue;
	can_join_group?: GroupSettingValue;
	can_leave_group?: GroupSettingValue;
	can_manage_group?: GroupSettingValue;
	can_mention_group?: GroupSettingValue;
	can_remove_members_group?: GroupSettingValue;
}

export type CreateUserGroupResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The unique ID of the created user group. */
	group_id: number;
};

export interface UpdateUserGroupMembersParams {
	/** The ID of the target user group. */
	user_group_id: number;
	/** The list of user IDs to be removed from the user group. */
	delete?: number[];
	/** The list of user IDs to be added to the user group. */
	add?: number[];
	/**
	 * The list of user group IDs to be removed from the user group.
	 *
	 * New in Zulip 10.0 (feature level 311).
	 */
	delete_subgroups?: number[];
	/**
	 * The list of user group IDs to be added to the user group.
	 *
	 * New in Zulip 10.0 (feature level 311).
	 */
	add_subgroups?: number[];
}

export type UpdateUserGroupMembersResponse = JsonSuccess;

export interface GetUserGroupMembersParams {
	/** The ID of the target user group. */
	user_group_id: number;
	/**
	 * Whether to consider only the direct members of user group and not members
	 * of its subgroups. Default is `false`.
	 */
	direct_member_only?: boolean;
}

export type GetUserGroupMembersResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** A list containing the user IDs of members of the user group. */
	members: number[];
};

export interface UpdateUserGroupParams {
	/** The ID of the target user group. */
	user_group_id: number;
	/** The new name of the group. */
	name?: string;
	/** The new description of the group. */
	description?: string;
	can_add_members_group?: GroupSettingValueUpdate;
	can_join_group?: GroupSettingValueUpdate;
	can_leave_group?: GroupSettingValueUpdate;
	can_manage_group?: GroupSettingValueUpdate;
	can_mention_group?: GroupSettingValueUpdate;
	can_remove_members_group?: GroupSettingValueUpdate;
	/**
	 * A deactivated user group can be reactivated by passing this
	 * parameter as `false`.
	 *
	 * New in Zulip 11.0 (feature level 386).
	 */
	deactivated?: boolean;
}

export type UpdateUserGroupResponse = JsonSuccess;

export interface GetUserGroupsParams {
	/**
	 * Whether to include deactivated user groups in the response.
	 *
	 * New in Zulip 10.0 (feature level 290).
	 */
	include_deactivated_groups?: boolean;
}

export type GetUserGroupsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** A list of `user_group` objects. */
	user_groups: {
		/** The human-readable description of the user group. */
		description: string;
		/** The user group's integer ID. */
		id: number;
		/**
		 * The UNIX timestamp for when the user group was created, in UTC seconds.
		 *
		 * New in Zulip 10.0 (feature level 292).
		 */
		date_created: number | null;
		/**
		 * The ID of the user who created this user group.
		 *
		 * New in Zulip 10.0 (feature level 292).
		 */
		creator_id: number | null;
		/**
		 * The integer user IDs of the user group's members, which
		 * are guaranteed to be non-deactivated users in the organization.
		 */
		members: number[];
		/**
		 * The integer user group IDs of the direct subgroups.
		 *
		 * New in Zulip 6.0 (feature level 131).
		 */
		direct_subgroup_ids: number[];
		/** User group name. */
		name: string;
		/**
		 * Whether the user group is a system group which cannot be
		 * modified by users.
		 *
		 * New in Zulip 5.0 (feature level 93).
		 */
		is_system_group: boolean;
		can_add_members_group: GroupSettingValue;
		can_join_group: GroupSettingValue;
		can_leave_group: GroupSettingValue;
		can_manage_group: GroupSettingValue;
		can_mention_group: GroupSettingValue;
		can_remove_members_group: GroupSettingValue;
		/**
		 * Whether the user group is deactivated. Deactivated groups
		 * cannot be used as a subgroup of another group or used for
		 * any other purpose.
		 *
		 * New in Zulip 10.0 (feature level 290).
		 */
		deactivated: boolean;
	}[];
};

export interface UpdateUserGroupSubgroupsParams {
	/** The ID of the target user group. */
	user_group_id: number;
	/** The list of user group IDs to be removed from the user group. */
	delete?: number[];
	/** The list of user group IDs to be added to the user group. */
	add?: number[];
}

export type UpdateUserGroupSubgroupsResponse = JsonSuccess;

export interface GetUserGroupSubgroupsParams {
	/** The ID of the target user group. */
	user_group_id: number;
	/**
	 * Whether to consider only direct subgroups of the user group
	 * or subgroups of subgroups also.
	 */
	direct_subgroup_only?: boolean;
}

export type GetUserGroupSubgroupsResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** A list containing the IDs of subgroups of the user group. */
	subgroups: number[];
};

export interface GetIsUserGroupMemberParams {
	/** The ID of the target user group. */
	user_group_id: number;
	/** The target user's ID. */
	user_id: number;
	/**
	 * Whether to consider only the direct members of user group and not members
	 * of its subgroups. Default is `false`.
	 */
	direct_member_only?: boolean;
}

export type GetIsUserGroupMemberResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** Whether the user is member of user group. */
	is_user_group_member: boolean;
};

export interface DeactivateUserGroupParams {
	/** The ID of the target user group. */
	user_group_id: number;
}

export type DeactivateUserGroupResponse = JsonSuccess;

export interface CreateChannelFolderParams {
	/** The name of the channel folder. */
	name: string;
	/** The description of the channel folder. */
	description?: string;
}

export type CreateChannelFolderResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The unique ID of the created channel folder. */
	channel_folder_id: number;
};

export interface GetChannelFoldersParams {
	/** Whether to include archived channel folders in the response. */
	include_archived?: boolean;
}

export type GetChannelFoldersResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** A list of channel folder objects. */
	channel_folders: ChannelFolder[];
};

export interface PatchChannelFoldersParams {
	/** A list of channel folder IDs representing the new order. */
	order: number[];
}

export type PatchChannelFoldersResponse = JsonSuccess;

export interface UpdateChannelFolderParams {
	/** The ID of the target channel folder. */
	channel_folder_id: number;
	/** The new name of the channel folder. */
	name?: string;
	/** The new description of the channel folder. */
	description?: string;
	/** Whether to archive or unarchive the channel folder. */
	is_archived?: boolean;
}

export type UpdateChannelFolderResponse = JsonSuccess;

export interface GetBotApiKeyParams {
	/** The user ID of the target bot. */
	bot_id: number;
}

export type GetBotApiKeyResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The API key for the bot. */
	api_key: string;
};

export interface RegenerateBotApiKeyParams {
	/** The user ID of the target bot. */
	bot_id: number;
}

export type RegenerateBotApiKeyResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The new API key for the bot. */
	api_key: string;
};

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type RestErrorHandlingParams = {};

export type RestErrorHandlingResponse = unknown;

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type ZulipOutgoingWebhooksParams = {};

export interface ZulipOutgoingWebhooksResponse {
	/** Email of the bot user. */
	bot_email: string;
	/** The full name of the bot user. */
	bot_full_name: string;
	/** The message content, in raw [Zulip-flavored Markdown](https://zulip.com/help/format-your-message-using-markdown) format (not rendered to HTML). */
	data: string;
	/**
	 * What aspect of the message triggered the outgoing webhook notification.
	 * Possible values include `direct_message` and `mention`.
	 */
	trigger: string;
	/**
	 * A string of alphanumeric characters that can be used to authenticate the
	 * webhook request (each bot user uses a fixed token). You can get the token used by a given outgoing webhook bot
	 * in the `zuliprc` file downloaded when creating the bot.
	 */
	token: string;
	/**
	 * A dictionary containing details on the message that triggered the
	 * outgoing webhook, in the format used by [`GET /messages`](https://zulip.com/api/get-messages).
	 */
	message: MessagesBase & {
		avatar_url: unknown;
		client?: unknown;
		content?: unknown;
		content_type?: unknown;
		display_recipient?: unknown;
		edit_history?: unknown;
		id?: unknown;
		is_me_message?: unknown;
		last_edit_timestamp?: unknown;
		last_moved_timestamp?: unknown;
		reactions?: unknown;
		recipient_id?: unknown;
		sender_email?: unknown;
		sender_full_name?: unknown;
		sender_id?: unknown;
		sender_realm_str?: unknown;
		stream_id?: unknown;
		subject?: unknown;
		submessages?: unknown;
		timestamp?: unknown;
		topic_links?: unknown;
		type?: unknown;
		/** The content/body of the message rendered in HTML. */
		rendered_content: string;
	};
}

export interface CreateBigBlueButtonVideoCallParams {
	/** Meeting name for the BigBlueButton video call. */
	meeting_name: string;
	/**
	 * Configures whether the call is voice-only; if true,
	 * disables cameras for all users. Only the call
	 * creator/moderator can edit this configuration.
	 *
	 * New in Zulip 10.0 (feature level 337).
	 */
	voice_only?: boolean;
}

export type CreateBigBlueButtonVideoCallResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The URL for the BigBlueButton video call. */
	url: string;
};

export interface CreateNextcloudTalkVideoCallParams {
	/** Room name for the Nextcloud Talk conversation. */
	room_name: string;
}

export type CreateNextcloudTalkVideoCallResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The URL for the Nextcloud Talk conversation. */
	url: string;
};

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type CreateWebexVideoCallParams = {};

export type CreateWebexVideoCallResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The URL for the Webex meeting. */
	url: string;
};

// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters
export type CreateConstructorGroupsVideoCallParams = {};

export type CreateConstructorGroupsVideoCallResponse = JsonSuccessBase & {
	result?: unknown;
	msg?: unknown;
	ignored_parameters_unsupported?: unknown;
	/** The URL for the Constructor Groups video call. */
	url: string;
};

/** Every operation of the Zulip API, by its name in Zulip's documentation, in camelCase. */
export interface Operations {
	/**
	 * Fetch an API key (production)
	 *
	 * This API endpoint is used by clients such as the Zulip mobile and
	 * terminal apps to implement password-based authentication. Given the
	 * user's Zulip login credentials, it returns a Zulip API key that the client
	 * can use to make requests as the user.
	 *
	 * @see https://zulip.com/api/fetch-api-key
	 */
	fetchApiKey: { params: FetchApiKeyParams; response: FetchApiKeyResponse };
	/**
	 * Fetch an API key (JWT)
	 *
	 * This API endpoint is used by clients to implement JSON Web Token
	 * (JWT) authentication. Given a JWT identifying a Zulip user, it
	 * returns a Zulip API key that the client can use to make requests
	 * as the user.
	 *
	 * New in Zulip 7.0 (feature level 160).
	 *
	 * @see https://zulip.com/api/jwt-fetch-api-key
	 */
	jwtFetchApiKey: { params: JwtFetchApiKeyParams; response: JwtFetchApiKeyResponse };
	/**
	 * Fetch an API key (development only)
	 *
	 * For easy testing of mobile apps and other clients and against Zulip
	 * development servers, we support fetching a Zulip API key for any user
	 * on the development server without authentication (so that they can
	 * implement analogues of the one-click login process available for Zulip
	 * development servers on the web).
	 *
	 * @see https://zulip.com/api/dev-fetch-api-key
	 */
	devFetchApiKey: { params: DevFetchApiKeyParams; response: DevFetchApiKeyResponse };
	/**
	 * List users (development only)
	 *
	 * Get a list of all, non-bot users in a [Zulip development
	 * server](https://zulip.readthedocs.io/en/latest/development/overview.html).
	 * This endpoint is used by mobile developers to fetch users for the
	 * development login flow.
	 *
	 * @see https://zulip.com/api/dev-list-users
	 */
	devListUsers: { params: DevListUsersParams; response: DevListUsersResponse };
	/**
	 * Get events from an event queue
	 *
	 * This endpoint allows you to receive new events from
	 * [a registered event queue](https://zulip.com/api/register-queue).
	 *
	 * @see https://zulip.com/api/get-events
	 */
	getEvents: { params: GetEventsParams; response: GetEventsResponse };
	/**
	 * Delete an event queue
	 *
	 * Delete a previously registered queue.
	 *
	 * @see https://zulip.com/api/delete-queue
	 */
	deleteQueue: { params: DeleteQueueParams; response: DeleteQueueResponse };
	/**
	 * Get channel ID
	 *
	 * Get the unique ID of a given channel.
	 *
	 * @see https://zulip.com/api/get-stream-id
	 */
	getStreamId: { params: GetStreamIdParams; response: GetStreamIdResponse };
	/**
	 * Mark all messages as read
	 *
	 * Marks all of the current user's unread messages as read.
	 *
	 * @see https://zulip.com/api/mark-all-as-read
	 * @deprecated
	 */
	markAllAsRead: { params: MarkAllAsReadParams; response: MarkAllAsReadResponse };
	/**
	 * Mark messages in a channel as read
	 *
	 * Mark all the unread messages in a channel as read.
	 *
	 * @see https://zulip.com/api/mark-stream-as-read
	 * @deprecated
	 */
	markStreamAsRead: { params: MarkStreamAsReadParams; response: MarkStreamAsReadResponse };
	/**
	 * Mark messages in a topic as read
	 *
	 * Mark all the unread messages in a topic as read.
	 *
	 * @see https://zulip.com/api/mark-topic-as-read
	 * @deprecated
	 */
	markTopicAsRead: { params: MarkTopicAsReadParams; response: MarkTopicAsReadResponse };
	/**
	 * Get attachments
	 *
	 * Fetch metadata on files uploaded by the requesting user.
	 *
	 * @see https://zulip.com/api/get-attachments
	 */
	getAttachments: { params: GetAttachmentsParams; response: GetAttachmentsResponse };
	/**
	 * Delete an attachment
	 *
	 * Delete an uploaded file given its attachment ID.
	 *
	 * @see https://zulip.com/api/remove-attachment
	 */
	removeAttachment: { params: RemoveAttachmentParams; response: RemoveAttachmentResponse };
	/**
	 * Get a bot's stored data
	 *
	 * !!! warn ""
	 *
	 * @see https://zulip.com/api/get-bot-storage
	 */
	getBotStorage: { params: GetBotStorageParams; response: GetBotStorageResponse };
	/**
	 * Update a bot's stored data
	 *
	 * !!! warn ""
	 *
	 * @see https://zulip.com/api/update-bot-storage
	 */
	updateBotStorage: { params: UpdateBotStorageParams; response: UpdateBotStorageResponse };
	/**
	 * Remove a bot's stored data
	 *
	 * !!! warn ""
	 *
	 * @see https://zulip.com/api/remove-bot-storage
	 */
	removeBotStorage: { params: RemoveBotStorageParams; response: RemoveBotStorageResponse };
	/**
	 * Get drafts
	 *
	 * Fetch all drafts for the current user.
	 *
	 * @see https://zulip.com/api/get-drafts
	 */
	getDrafts: { params: GetDraftsParams; response: GetDraftsResponse };
	/**
	 * Create drafts
	 *
	 * Create one or more drafts on the server. These drafts will be automatically
	 * synchronized to other clients via `drafts` events.
	 *
	 * @see https://zulip.com/api/create-drafts
	 */
	createDrafts: { params: CreateDraftsParams; response: CreateDraftsResponse };
	/**
	 * Edit a draft
	 *
	 * Edit a draft on the server. The edit will be automatically
	 * synchronized to other clients via `drafts` events.
	 *
	 * @see https://zulip.com/api/edit-draft
	 */
	editDraft: { params: EditDraftParams; response: EditDraftResponse };
	/**
	 * Delete a draft
	 *
	 * Delete a single draft from the server. The deletion will be automatically
	 * synchronized to other clients via a `drafts` event.
	 *
	 * @see https://zulip.com/api/delete-draft
	 */
	deleteDraft: { params: DeleteDraftParams; response: DeleteDraftResponse };
	/**
	 * Get all navigation views
	 *
	 * Fetch all configured custom navigation views for the current user.
	 *
	 * New in Zulip 11.0 (feature level 390).
	 *
	 * @see https://zulip.com/api/get-navigation-views
	 */
	getNavigationViews: { params: GetNavigationViewsParams; response: GetNavigationViewsResponse };
	/**
	 * Add a navigation view
	 *
	 * Adds a new custom left sidebar navigation view configuration
	 * for the current user.
	 *
	 * New in Zulip 11.0 (feature level 390).
	 *
	 * @see https://zulip.com/api/add-navigation-view
	 */
	addNavigationView: { params: AddNavigationViewParams; response: AddNavigationViewResponse };
	/**
	 * Update the navigation view
	 *
	 * Update the details of an existing configured navigation view,
	 * such as its name or whether it's pinned.
	 *
	 * New in Zulip 11.0 (feature level 390).
	 *
	 * @see https://zulip.com/api/edit-navigation-view
	 */
	editNavigationView: { params: EditNavigationViewParams; response: EditNavigationViewResponse };
	/**
	 * Remove a navigation view
	 *
	 * Remove a navigation view.
	 *
	 * New in Zulip 11.0 (feature level 390).
	 *
	 * @see https://zulip.com/api/remove-navigation-view
	 */
	removeNavigationView: { params: RemoveNavigationViewParams; response: RemoveNavigationViewResponse };
	/**
	 * Get all saved snippets
	 *
	 * Fetch all the saved snippets for the current user.
	 *
	 * New in Zulip 10.0 (feature level 297).
	 *
	 * @see https://zulip.com/api/get-saved-snippets
	 */
	getSavedSnippets: { params: GetSavedSnippetsParams; response: GetSavedSnippetsResponse };
	/**
	 * Create a saved snippet
	 *
	 * Create a new saved snippet for the current user.
	 *
	 * New in Zulip 10.0 (feature level 297).
	 *
	 * @see https://zulip.com/api/create-saved-snippet
	 */
	createSavedSnippet: { params: CreateSavedSnippetParams; response: CreateSavedSnippetResponse };
	/**
	 * Edit a saved snippet
	 *
	 * Edit a saved snippet for the current user.
	 *
	 * New in Zulip 10.0 (feature level 368).
	 *
	 * @see https://zulip.com/api/edit-saved-snippet
	 */
	editSavedSnippet: { params: EditSavedSnippetParams; response: EditSavedSnippetResponse };
	/**
	 * Delete a saved snippet
	 *
	 * Delete a saved snippet.
	 *
	 * New in Zulip 10.0 (feature level 297).
	 *
	 * @see https://zulip.com/api/delete-saved-snippet
	 */
	deleteSavedSnippet: { params: DeleteSavedSnippetParams; response: DeleteSavedSnippetResponse };
	/**
	 * Get reminders
	 *
	 * Fetch all [reminders](https://zulip.com/help/schedule-a-reminder) for the
	 * current user.
	 *
	 * New in Zulip 11.0 (feature level 399).
	 *
	 * @see https://zulip.com/api/get-reminders
	 */
	getReminders: { params: GetRemindersParams; response: GetRemindersResponse };
	/**
	 * Create a message reminder
	 *
	 * Schedule a reminder to be sent to the current user at the specified time. The reminder will link the relevant message.
	 *
	 * New in Zulip 11.0 (feature level 381).
	 *
	 * @see https://zulip.com/api/create-message-reminder
	 */
	createMessageReminder: { params: CreateMessageReminderParams; response: CreateMessageReminderResponse };
	/**
	 * Delete a reminder
	 *
	 * Delete, and therefore cancel sending, a previously [scheduled
	 * reminder](https://zulip.com/help/schedule-a-reminder).
	 *
	 * New in Zulip 11.0 (feature level 399).
	 *
	 * @see https://zulip.com/api/delete-reminder
	 */
	deleteReminder: { params: DeleteReminderParams; response: DeleteReminderResponse };
	/**
	 * Get scheduled messages
	 *
	 * Fetch all [scheduled messages](https://zulip.com/help/schedule-a-message) for
	 * the current user.
	 *
	 * New in Zulip 7.0 (feature level 173).
	 *
	 * @see https://zulip.com/api/get-scheduled-messages
	 */
	getScheduledMessages: { params: GetScheduledMessagesParams; response: GetScheduledMessagesResponse };
	/**
	 * Create a scheduled message
	 *
	 * Create a new [scheduled message](https://zulip.com/help/schedule-a-message).
	 *
	 * New in Zulip 7.0 (feature level 179).
	 *
	 * @see https://zulip.com/api/create-scheduled-message
	 */
	createScheduledMessage: { params: CreateScheduledMessageParams; response: CreateScheduledMessageResponse };
	/**
	 * Edit a scheduled message
	 *
	 * Edit an existing [scheduled message](https://zulip.com/help/schedule-a-message).
	 *
	 * New in Zulip 7.0 (feature level 184).
	 *
	 * @see https://zulip.com/api/update-scheduled-message
	 */
	updateScheduledMessage: { params: UpdateScheduledMessageParams; response: UpdateScheduledMessageResponse };
	/**
	 * Delete a scheduled message
	 *
	 * Delete, and therefore cancel sending, a previously [scheduled
	 * message](https://zulip.com/help/schedule-a-message).
	 *
	 * New in Zulip 7.0 (feature level 173).
	 *
	 * @see https://zulip.com/api/delete-scheduled-message
	 */
	deleteScheduledMessage: { params: DeleteScheduledMessageParams; response: DeleteScheduledMessageResponse };
	/**
	 * Add a default channel
	 *
	 * Add a channel to the set of [default channels][default-channels]
	 * for new users joining the organization.
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/add-default-stream
	 */
	addDefaultStream: { params: AddDefaultStreamParams; response: AddDefaultStreamResponse };
	/**
	 * Remove a default channel
	 *
	 * Remove a channel from the set of [default channels][default-channels]
	 * for new users joining the organization.
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/remove-default-stream
	 */
	removeDefaultStream: { params: RemoveDefaultStreamParams; response: RemoveDefaultStreamResponse };
	/**
	 * Get messages
	 *
	 * This endpoint is the primary way to fetch messages. It is used by all official
	 * Zulip clients (e.g. the web, desktop, mobile, and terminal clients) as well as
	 * many bots, API clients, backup scripts, etc.
	 *
	 * @see https://zulip.com/api/get-messages
	 */
	getMessages: { params: GetMessagesParams; response: GetMessagesResponse };
	/**
	 * Send a message
	 *
	 * Send a [channel message](https://zulip.com/help/introduction-to-topics) or a
	 * [direct message](https://zulip.com/help/direct-messages).
	 *
	 * @see https://zulip.com/api/send-message
	 */
	sendMessage: { params: SendMessageParams; response: SendMessageResponse };
	/**
	 * Get a message's edit history
	 *
	 * Fetch the message edit history of a previously edited message.
	 *
	 * @see https://zulip.com/api/get-message-history
	 */
	getMessageHistory: { params: GetMessageHistoryParams; response: GetMessageHistoryResponse };
	/**
	 * Update personal message flags
	 *
	 * Add or remove personal message flags like `read` and `starred`
	 * on a collection of message IDs.
	 *
	 * @see https://zulip.com/api/update-message-flags
	 */
	updateMessageFlags: { params: UpdateMessageFlagsParams; response: UpdateMessageFlagsResponse };
	/**
	 * Update personal message flags for narrow
	 *
	 * Add or remove personal message flags like `read` and `starred`
	 * on a range of messages within a narrow.
	 *
	 * New in Zulip 6.0 (feature level 155).
	 *
	 * @see https://zulip.com/api/update-message-flags-for-narrow
	 */
	updateMessageFlagsForNarrow: { params: UpdateMessageFlagsForNarrowParams; response: UpdateMessageFlagsForNarrowResponse };
	/**
	 * Render a message
	 *
	 * Render a message to HTML.
	 *
	 * @see https://zulip.com/api/render-message
	 */
	renderMessage: { params: RenderMessageParams; response: RenderMessageResponse };
	/**
	 * Add an emoji reaction
	 *
	 * Add an [emoji reaction](https://zulip.com/help/emoji-reactions) to a message.
	 *
	 * @see https://zulip.com/api/add-reaction
	 */
	addReaction: { params: AddReactionParams; response: AddReactionResponse };
	/**
	 * Remove an emoji reaction
	 *
	 * Remove an [emoji reaction](https://zulip.com/help/emoji-reactions) from a message.
	 *
	 * @see https://zulip.com/api/remove-reaction
	 */
	removeReaction: { params: RemoveReactionParams; response: RemoveReactionResponse };
	/**
	 * Get a message's read receipts
	 *
	 * Returns a list containing the IDs for all users who have
	 * marked the message as read (and whose privacy settings allow
	 * sharing that information).
	 *
	 * New in Zulip 6.0 (feature level 137).
	 *
	 * @see https://zulip.com/api/get-read-receipts
	 */
	getReadReceipts: { params: GetReadReceiptsParams; response: GetReadReceiptsResponse };
	/**
	 * Check if messages match a narrow
	 *
	 * Check whether a set of messages match a [narrow](https://zulip.com/api/construct-narrow).
	 *
	 * @see https://zulip.com/api/check-messages-match-narrow
	 */
	checkMessagesMatchNarrow: { params: CheckMessagesMatchNarrowParams; response: CheckMessagesMatchNarrowResponse };
	/**
	 * Fetch a single message
	 *
	 * Given a message ID, return the message object.
	 *
	 * @see https://zulip.com/api/get-message
	 */
	getMessage: { params: GetMessageParams; response: GetMessageResponse };
	/**
	 * Edit a message
	 *
	 * Update the content, topic, or channel of the message with the specified
	 * ID.
	 *
	 * @see https://zulip.com/api/update-message
	 */
	updateMessage: { params: UpdateMessageParams; response: UpdateMessageResponse };
	/**
	 * Delete a message
	 *
	 * Permanently delete a message.
	 *
	 * @see https://zulip.com/api/delete-message
	 */
	deleteMessage: { params: DeleteMessageParams; response: DeleteMessageResponse };
	/**
	 * Report a message
	 *
	 * Sends a notification to the organization's [moderation request
	 * channel](https://zulip.com/help/enable-moderation-requests), if it is configured, that
	 * reports the targeted message for [review and moderation](https://zulip.com/help/report-a-message).
	 *
	 * New in Zulip 11.0 (feature level 382).
	 *
	 * @see https://zulip.com/api/report-message
	 */
	reportMessage: { params: ReportMessageParams; response: ReportMessageResponse };
	/**
	 * Upload a file
	 *
	 * Initially, only you will be able to access the link. To share the
	 * uploaded file, you'll need to [send a message][send-message]
	 * containing the resulting link. Users who can already access the link
	 * can reshare it with other users by sending additional Zulip messages
	 * containing the link.
	 *
	 * @see https://zulip.com/api/upload-file
	 */
	uploadFile: { params: UploadFileParams; response: UploadFileResponse };
	/**
	 * Check thumbnail status
	 *
	 * Check whether a thumbnail exists for a specific file uploaded by a user.
	 * This endpoint is intended to be polled by clients to determine when
	 * thumbnail generation is complete.
	 *
	 * New in Zulip 12.0 (feature level 479).
	 *
	 * @see https://zulip.com/api/check-thumbnail-status
	 */
	checkThumbnailStatus: { params: CheckThumbnailStatusParams; response: CheckThumbnailStatusResponse };
	/**
	 * Get public temporary URL for an uploaded file
	 *
	 * Get a temporary URL for access to an [uploaded file](https://zulip.com/api/upload-file)
	 * that doesn't require authentication.
	 *
	 * New in Zulip 3.0 (feature level 1).
	 *
	 * @see https://zulip.com/api/get-file-temporary-url
	 */
	getFileTemporaryUrl: { params: GetFileTemporaryUrlParams; response: GetFileTemporaryUrlResponse };
	/**
	 * Get users
	 *
	 * Retrieve details on users in the organization.
	 *
	 * @see https://zulip.com/api/get-users
	 */
	getUsers: { params: GetUsersParams; response: GetUsersResponse };
	/**
	 * Create a user
	 *
	 * Create a new user account via the API.
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/create-user
	 */
	createUser: { params: CreateUserParams; response: CreateUserResponse };
	/**
	 * Reactivate a user
	 *
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/reactivate-user
	 */
	reactivateUser: { params: ReactivateUserParams; response: ReactivateUserResponse };
	/**
	 * Update user status
	 *
	 * Administrator endpoint for changing the [status](https://zulip.com/help/status-and-availability) of
	 * another user.
	 *
	 * New in Zulip 11.0 (feature level 407).
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/update-status-for-user
	 */
	updateStatusForUser: { params: UpdateStatusForUserParams; response: UpdateStatusForUserResponse };
	/**
	 * Get a user's status
	 *
	 * Get the [status](https://zulip.com/help/status-and-availability) currently set by a
	 * user in the organization.
	 *
	 * New in Zulip 9.0 (feature level 262).
	 *
	 * @see https://zulip.com/api/get-user-status
	 */
	getUserStatus: { params: GetUserStatusParams; response: GetUserStatusResponse };
	/**
	 * Get a user's presence
	 *
	 * Get the presence status for a specific user.
	 *
	 * @see https://zulip.com/api/get-user-presence
	 */
	getUserPresence: { params: GetUserPresenceParams; response: GetUserPresenceResponse };
	/**
	 * Get own user
	 *
	 * Get basic data about the user/bot that requests this endpoint.
	 *
	 * @see https://zulip.com/api/get-own-user
	 */
	getOwnUser: { params: GetOwnUserParams; response: GetOwnUserResponse };
	/**
	 * Deactivate own user
	 *
	 * Deactivates the current user's account. See also the administrative endpoint for
	 * [deactivating another user](https://zulip.com/api/deactivate-user).
	 *
	 * @see https://zulip.com/api/deactivate-own-user
	 */
	deactivateOwnUser: { params: DeactivateOwnUserParams; response: DeactivateOwnUserResponse };
	/**
	 * Regenerate your API key
	 *
	 * !!! warn ""
	 *
	 * @see https://zulip.com/api/regenerate-api-key
	 */
	regenerateApiKey: { params: RegenerateApiKeyParams; response: RegenerateApiKeyResponse };
	/**
	 * Get all alert words
	 *
	 * Get all of the user's configured [alert words][alert-words].
	 *
	 * @see https://zulip.com/api/get-alert-words
	 */
	getAlertWords: { params: GetAlertWordsParams; response: GetAlertWordsResponse };
	/**
	 * Add alert words
	 *
	 * Add words (or phrases) to the user's set of configured [alert words][alert-words].
	 *
	 * @see https://zulip.com/api/add-alert-words
	 */
	addAlertWords: { params: AddAlertWordsParams; response: AddAlertWordsResponse };
	/**
	 * Remove alert words
	 *
	 * Remove words (or phrases) from the user's set of configured [alert words][alert-words].
	 *
	 * @see https://zulip.com/api/remove-alert-words
	 */
	removeAlertWords: { params: RemoveAlertWordsParams; response: RemoveAlertWordsResponse };
	/**
	 * Update your presence
	 *
	 * Update the current user's [presence][availability] and fetch presence data
	 * of other users in the organization.
	 *
	 * @see https://zulip.com/api/update-presence
	 */
	updatePresence: { params: UpdatePresenceParams; response: UpdatePresenceResponse };
	/**
	 * Update your profile data
	 *
	 * Update the current user's [profile data](https://zulip.com/help/edit-your-profile) for
	 * one or more of the [custom profile fields](https://zulip.com/help/custom-profile-fields)
	 * configured in the organization.
	 *
	 * @see https://zulip.com/api/update-profile-data
	 */
	updateProfileData: { params: UpdateProfileDataParams; response: UpdateProfileDataResponse };
	/**
	 * Remove your profile data
	 *
	 * Remove the current user's [profile data](https://zulip.com/help/edit-your-profile) for
	 * one or more of the [custom profile fields](https://zulip.com/help/custom-profile-fields)
	 * configured in the organization.
	 *
	 * @see https://zulip.com/api/remove-profile-data
	 */
	removeProfileData: { params: RemoveProfileDataParams; response: RemoveProfileDataResponse };
	/**
	 * Update your status
	 *
	 * Change your [status](https://zulip.com/help/status-and-availability).
	 *
	 * @see https://zulip.com/api/update-status
	 */
	updateStatus: { params: UpdateStatusParams; response: UpdateStatusResponse };
	/**
	 * Get topics in a channel
	 *
	 * Get all topics the user has access to in a specific channel.
	 *
	 * @see https://zulip.com/api/get-stream-topics
	 */
	getStreamTopics: { params: GetStreamTopicsParams; response: GetStreamTopicsResponse };
	/**
	 * Get subscribed channels
	 *
	 * Get all channels that the user is subscribed to.
	 *
	 * @see https://zulip.com/api/get-subscriptions
	 */
	getSubscriptions: { params: GetSubscriptionsParams; response: GetSubscriptionsResponse };
	/**
	 * Subscribe to a channel
	 *
	 * Subscribe one or more users to one or more channels.
	 *
	 * @see https://zulip.com/api/subscribe
	 */
	subscribe: { params: SubscribeParams; response: SubscribeResponse };
	/**
	 * Update subscriptions
	 *
	 * Update which channels you are subscribed to.
	 *
	 * @see https://zulip.com/api/update-subscriptions
	 */
	updateSubscriptions: { params: UpdateSubscriptionsParams; response: UpdateSubscriptionsResponse };
	/**
	 * Unsubscribe from a channel
	 *
	 * Unsubscribe yourself or other users from one or more channels.
	 *
	 * @see https://zulip.com/api/unsubscribe
	 */
	unsubscribe: { params: UnsubscribeParams; response: UnsubscribeResponse };
	/**
	 * Topic muting
	 *
	 * Before Zulip 7.0 (feature level 169), this endpoint
	 * returned an error if asked to mute a topic that was already muted
	 * or asked to unmute a topic that had not previously been muted.
	 *
	 * @see https://zulip.com/api/mute-topic
	 * @deprecated
	 */
	muteTopic: { params: MuteTopicParams; response: MuteTopicResponse };
	/**
	 * Send a test notification to mobile device(s)
	 *
	 * Trigger sending a test push notification to the user's
	 * selected mobile device or all of their mobile devices.
	 *
	 * New in Zulip 8.0 (feature level 217).
	 *
	 * @see https://zulip.com/api/test-notify
	 * @deprecated
	 */
	testNotify: { params: TestNotifyParams; response: TestNotifyResponse };
	/**
	 * Send an E2EE test notification to mobile device(s)
	 *
	 * Trigger sending an end-to-end encrypted (E2EE) test push notification
	 * to the user's selected mobile device or all of their mobile devices.
	 *
	 * New in Zulip 11.0 (feature level 420).
	 *
	 * @see https://zulip.com/api/e2ee-test-notify
	 */
	e2eeTestNotify: { params: E2eeTestNotifyParams; response: E2eeTestNotifyResponse };
	/**
	 * Register E2EE push device
	 *
	 * Register a device to receive end-to-end encrypted mobile push notifications,
	 * or update such a registration.
	 *
	 * New in Zulip 11.0 (feature level 406).
	 *
	 * @see https://zulip.com/api/register-push-device
	 */
	registerPushDevice: { params: RegisterPushDeviceParams; response: RegisterPushDeviceResponse };
	/**
	 * Register E2EE push device to bouncer
	 *
	 * Register a push device to bouncer to receive end-to-end encrypted
	 * mobile push notifications.
	 *
	 * New in Zulip 11.0 (feature level 406).
	 *
	 * @see https://zulip.com/api/register-remote-push-device
	 */
	registerRemotePushDevice: { params: RegisterRemotePushDeviceParams; response: RegisterRemotePushDeviceResponse };
	/**
	 * Register a logged-in device
	 *
	 * Logged-in mobile devices use this endpoint as an initial step to
	 * register themselves, before registering for E2EE push notifications.
	 *
	 * New in Zulip 12.0 (feature level 468).
	 *
	 * @see https://zulip.com/api/register-client-device
	 */
	registerClientDevice: { params: RegisterClientDeviceParams; response: RegisterClientDeviceResponse };
	/**
	 * Remove a registered device
	 *
	 * Mobile devices use this endpoint to remove their device record
	 * registered using [`POST /register_client_device`](https://zulip.com/api/register-client-device)
	 * when the user logs out.
	 *
	 * New in Zulip 12.0 (feature level 470).
	 *
	 * @see https://zulip.com/api/remove-client-device
	 */
	removeClientDevice: { params: RemoveClientDeviceParams; response: RemoveClientDeviceResponse };
	/**
	 * Update personal preferences for a topic
	 *
	 * This endpoint is used to update the personal preferences for a topic,
	 * such as the topic's visibility policy, which is used to implement
	 * [mute a topic](https://zulip.com/help/mute-a-topic) and related features.
	 *
	 * New in Zulip 7.0 (feature level 170).
	 *
	 * @see https://zulip.com/api/update-user-topic
	 */
	updateUserTopic: { params: UpdateUserTopicParams; response: UpdateUserTopicResponse };
	/**
	 * Mute a user
	 *
	 * Muted users should be implemented by clients as follows:
	 *
	 * New in Zulip 4.0 (feature level 48).
	 *
	 * @see https://zulip.com/api/mute-user
	 */
	muteUser: { params: MuteUserParams; response: MuteUserResponse };
	/**
	 * Unmute a user
	 *
	 * New in Zulip 4.0 (feature level 48).
	 *
	 * @see https://zulip.com/api/unmute-user
	 */
	unmuteUser: { params: UnmuteUserParams; response: UnmuteUserResponse };
	/**
	 * Add an APNs device token
	 *
	 * This endpoint adds an APNs device token to register for iOS push notifications.
	 *
	 * @see https://zulip.com/api/add-apns-token
	 * @deprecated
	 */
	addApnsToken: { params: AddApnsTokenParams; response: AddApnsTokenResponse };
	/**
	 * Remove an APNs device token
	 *
	 * This endpoint removes an APNs device token for iOS push notifications.
	 *
	 * @see https://zulip.com/api/remove-apns-token
	 * @deprecated
	 */
	removeApnsToken: { params: RemoveApnsTokenParams; response: RemoveApnsTokenResponse };
	/**
	 * Add an FCM registration token
	 *
	 * This endpoint adds an FCM registration token for push notifications.
	 *
	 * @see https://zulip.com/api/add-fcm-token
	 * @deprecated
	 */
	addFcmToken: { params: AddFcmTokenParams; response: AddFcmTokenResponse };
	/**
	 * Remove an FCM registration token
	 *
	 * This endpoint removes an FCM registration token for push notifications.
	 *
	 * @see https://zulip.com/api/remove-fcm-token
	 * @deprecated
	 */
	removeFcmToken: { params: RemoveFcmTokenParams; response: RemoveFcmTokenResponse };
	/**
	 * Get subscription status
	 *
	 * Check whether a user is subscribed to a channel.
	 *
	 * New in Zulip 3.0 (feature level 12).
	 *
	 * @see https://zulip.com/api/get-subscription-status
	 */
	getSubscriptionStatus: { params: GetSubscriptionStatusParams; response: GetSubscriptionStatusResponse };
	/**
	 * Get a user's subscribed channels
	 *
	 * Gets the list of channels that the target user is subscribed to.
	 *
	 * New in Zulip 12.0 (feature level 440).
	 *
	 * @see https://zulip.com/api/get-user-channels
	 */
	getUserChannels: { params: GetUserChannelsParams; response: GetUserChannelsResponse };
	/**
	 * Upload custom emoji
	 *
	 * This endpoint is used to upload a custom emoji for use in the user's
	 * organization. Access to this endpoint depends on the
	 * [organization's configuration](https://zulip.com/help/custom-emoji#change-who-can-add-custom-emoji).
	 *
	 * @see https://zulip.com/api/upload-custom-emoji
	 */
	uploadCustomEmoji: { params: UploadCustomEmojiParams; response: UploadCustomEmojiResponse };
	/**
	 * Deactivate custom emoji
	 *
	 * Users can only deactivate custom emoji that they added themselves except for
	 * organization administrators, who can deactivate any custom emoji.
	 *
	 * @see https://zulip.com/api/deactivate-custom-emoji
	 */
	deactivateCustomEmoji: { params: DeactivateCustomEmojiParams; response: DeactivateCustomEmojiResponse };
	/**
	 * Get all custom emoji
	 *
	 * Get all the custom emoji in the user's organization.
	 *
	 * @see https://zulip.com/api/get-custom-emoji
	 */
	getCustomEmoji: { params: GetCustomEmojiParams; response: GetCustomEmojiResponse };
	/**
	 * Get presence of all users
	 *
	 * Get the presence information of all the users in an organization.
	 *
	 * @see https://zulip.com/api/get-presence
	 */
	getPresence: { params: GetPresenceParams; response: GetPresenceResponse };
	/**
	 * Get allowed domains
	 *
	 * Get the set of allowed domains configured in the organization for user
	 * account email addresses.
	 *
	 * @see https://zulip.com/api/get-realm-domains
	 */
	getRealmDomains: { params: GetRealmDomainsParams; response: GetRealmDomainsResponse };
	/**
	 * Add an allowed domain
	 *
	 * Add a domain to the set of allowed domains configured in the organization
	 * for [user account email addresses](https://zulip.com/help/restrict-account-creation).
	 *
	 * Needs an organization owner.
	 *
	 * @see https://zulip.com/api/add-realm-domain
	 */
	addRealmDomain: { params: AddRealmDomainParams; response: AddRealmDomainResponse };
	/**
	 * Update an allowed domain
	 *
	 * Update whether subdomains are allowed in [user account email
	 * addresses](https://zulip.com/help/restrict-account-creation) for the specified domain.
	 *
	 * Needs an organization owner.
	 *
	 * @see https://zulip.com/api/patch-realm-domain
	 */
	patchRealmDomain: { params: PatchRealmDomainParams; response: PatchRealmDomainResponse };
	/**
	 * Remove an allowed domain
	 *
	 * Remove the specified domain from the set of allowed domains configured in
	 * the organization for [user account email addresses](https://zulip.com/help/restrict-account-creation).
	 *
	 * Needs an organization owner.
	 *
	 * @see https://zulip.com/api/delete-realm-domain
	 */
	deleteRealmDomain: { params: DeleteRealmDomainParams; response: DeleteRealmDomainResponse };
	/**
	 * Get all custom profile fields
	 *
	 * Get all the [custom profile fields](https://zulip.com/help/custom-profile-fields)
	 * configured for the user's organization.
	 *
	 * @see https://zulip.com/api/get-custom-profile-fields
	 */
	getCustomProfileFields: { params: GetCustomProfileFieldsParams; response: GetCustomProfileFieldsResponse };
	/**
	 * Reorder custom profile fields
	 *
	 * Reorder the custom profile fields in the user's organization.
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/reorder-custom-profile-fields
	 */
	reorderCustomProfileFields: { params: ReorderCustomProfileFieldsParams; response: ReorderCustomProfileFieldsResponse };
	/**
	 * Create a custom profile field
	 *
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/create-custom-profile-field
	 */
	createCustomProfileField: { params: CreateCustomProfileFieldParams; response: CreateCustomProfileFieldResponse };
	/**
	 * Update realm-level defaults of user settings
	 *
	 * Change the [default values of settings][new-user-defaults] for new users
	 * joining the organization. Essentially all
	 * [personal preference settings](https://zulip.com/api/update-settings) are supported.
	 *
	 * New in Zulip 5.0 (feature level 96).
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/update-realm-user-settings-defaults
	 */
	updateRealmUserSettingsDefaults: { params: UpdateRealmUserSettingsDefaultsParams; response: UpdateRealmUserSettingsDefaultsResponse };
	/**
	 * Bulk update subscription settings
	 *
	 * Update the current user's personal settings for channels they are
	 * subscribed to. These settings include [color](https://zulip.com/help/change-the-color-of-a-channel),
	 * [muting](https://zulip.com/help/mute-a-channel), [pinning](https://zulip.com/help/pin-a-channel)
	 * and [per-channel notification settings](https://zulip.com/help/channel-notifications).
	 *
	 * @see https://zulip.com/api/update-subscription-settings
	 */
	updateSubscriptionSettings: { params: UpdateSubscriptionSettingsParams; response: UpdateSubscriptionSettingsResponse };
	/**
	 * Update a subscription setting
	 *
	 * Update the current user's personal settings for a specific channel they
	 * are subscribed to. These settings include [color](https://zulip.com/help/change-the-color-of-a-channel),
	 * [muting](https://zulip.com/help/mute-a-channel), [pinning](https://zulip.com/help/pin-a-channel)
	 * and [per-channel notification settings](https://zulip.com/help/channel-notifications).
	 *
	 * @see https://zulip.com/api/update-subscription-property
	 */
	updateSubscriptionProperty: { params: UpdateSubscriptionPropertyParams; response: UpdateSubscriptionPropertyResponse };
	/**
	 * Get a user by email
	 *
	 * Fetch details for a single user in the organization given a Zulip
	 * API email address.
	 *
	 * @see https://zulip.com/api/get-user-by-email
	 */
	getUserByEmail: { params: GetUserByEmailParams; response: GetUserByEmailResponse };
	/**
	 * Update a user by email
	 *
	 * Administrative endpoint to update the details of another user in the organization by their email address.
	 * Works the same way as [`PATCH /users/{user_id}`](https://zulip.com/api/update-user) but fetching the target user by their
	 * real email address.
	 *
	 * New in Zulip 10.0 (feature level 313).
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/update-user-by-email
	 */
	updateUserByEmail: { params: UpdateUserByEmailParams; response: UpdateUserByEmailResponse };
	/**
	 * Get a user
	 *
	 * Fetch details for a single user in the organization.
	 *
	 * New in Zulip 3.0 (feature level 1).
	 *
	 * @see https://zulip.com/api/get-user
	 */
	getUser: { params: GetUserParams; response: GetUserResponse };
	/**
	 * Update a user
	 *
	 * Administrative endpoint to update the details of another user in the organization.
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/update-user
	 */
	updateUser: { params: UpdateUserParams; response: UpdateUserResponse };
	/**
	 * Deactivate a user
	 *
	 * Note that any bots controlled by the user will be deactivated
	 * before the user; clients that don't want this behavior are
	 * expected to prompt the user to adjust the bot's owners before
	 * making this API request.
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/deactivate-user
	 */
	deactivateUser: { params: DeactivateUserParams; response: DeactivateUserResponse };
	/**
	 * Get linkifiers
	 *
	 * List all of an organization's configured
	 * [linkifiers](https://zulip.com/help/add-a-custom-linkifier), regular
	 * expression patterns that are automatically linkified when they appear
	 * in messages and topics.
	 *
	 * New in Zulip 4.0 (feature level 54).
	 *
	 * @see https://zulip.com/api/get-linkifiers
	 */
	getLinkifiers: { params: GetLinkifiersParams; response: GetLinkifiersResponse };
	/**
	 * Reorder linkifiers
	 *
	 * Change the order that the regular expression patterns in the organization's
	 * [linkifiers](https://zulip.com/help/add-a-custom-linkifier) are matched in messages and topics.
	 * Useful when defining linkifiers with overlapping patterns.
	 *
	 * New in Zulip 8.0 (feature level 202).
	 *
	 * @see https://zulip.com/api/reorder-linkifiers
	 */
	reorderLinkifiers: { params: ReorderLinkifiersParams; response: ReorderLinkifiersResponse };
	/**
	 * Add a linkifier
	 *
	 * Configure [linkifiers](https://zulip.com/help/add-a-custom-linkifier),
	 * regular expression patterns that are automatically linkified when they
	 * appear in messages and topics.
	 *
	 * @see https://zulip.com/api/add-linkifier
	 */
	addLinkifier: { params: AddLinkifierParams; response: AddLinkifierResponse };
	/**
	 * Remove a linkifier
	 *
	 * Remove [linkifiers](https://zulip.com/help/add-a-custom-linkifier), regular
	 * expression patterns that are automatically linkified when they appear
	 * in messages and topics.
	 *
	 * @see https://zulip.com/api/remove-linkifier
	 */
	removeLinkifier: { params: RemoveLinkifierParams; response: RemoveLinkifierResponse };
	/**
	 * Update a linkifier
	 *
	 * Update a [linkifier](https://zulip.com/help/add-a-custom-linkifier), regular
	 * expression patterns that are automatically linkified when they appear
	 * in messages and topics.
	 *
	 * New in Zulip 4.0 (feature level 57).
	 *
	 * @see https://zulip.com/api/update-linkifier
	 */
	updateLinkifier: { params: UpdateLinkifierParams; response: UpdateLinkifierResponse };
	/**
	 * Add a code playground
	 *
	 * Configure [code playgrounds](https://zulip.com/help/code-blocks#code-playgrounds) for the organization.
	 *
	 * New in Zulip 4.0 (feature level 49).
	 *
	 * @see https://zulip.com/api/add-code-playground
	 */
	addCodePlayground: { params: AddCodePlaygroundParams; response: AddCodePlaygroundResponse };
	/**
	 * Remove a code playground
	 *
	 * Remove a [code playground](https://zulip.com/help/code-blocks#code-playgrounds) previously
	 * configured for an organization.
	 *
	 * New in Zulip 4.0 (feature level 49).
	 *
	 * @see https://zulip.com/api/remove-code-playground
	 */
	removeCodePlayground: { params: RemoveCodePlaygroundParams; response: RemoveCodePlaygroundResponse };
	/**
	 * Get all data exports
	 *
	 * Fetch all the public and standard [data exports][export-data]
	 * of the organization.
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/get-realm-exports
	 */
	getRealmExports: { params: GetRealmExportsParams; response: GetRealmExportsResponse };
	/**
	 * Create a data export
	 *
	 * Create a public or a standard [data export][export-data] of the organization.
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/export-realm
	 */
	exportRealm: { params: ExportRealmParams; response: ExportRealmResponse };
	/**
	 * Get data export consent state
	 *
	 * Fetches which users have [consented](https://zulip.com/help/export-your-organization#configure-whether-administrators-can-export-your-private-data)
	 * for their private data to be exported by organization administrators.
	 *
	 * New in Zulip 10.0 (feature level 295).
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/get-realm-export-consents
	 */
	getRealmExportConsents: { params: GetRealmExportConsentsParams; response: GetRealmExportConsentsResponse };
	/**
	 * Get all invitations
	 *
	 * Fetch all unexpired [invitations](https://zulip.com/help/invite-new-users) (i.e. email
	 * invitations and reusable invitation links) that can be managed by the user.
	 *
	 * @see https://zulip.com/api/get-invites
	 */
	getInvites: { params: GetInvitesParams; response: GetInvitesResponse };
	/**
	 * Send invitations
	 *
	 * Send [invitations](https://zulip.com/help/invite-new-users) to specified email addresses.
	 *
	 * @see https://zulip.com/api/send-invites
	 */
	sendInvites: { params: SendInvitesParams; response: SendInvitesResponse };
	/**
	 * Create a reusable invitation link
	 *
	 * Create a [reusable invitation link](https://zulip.com/help/invite-new-users#create-a-reusable-invitation-link)
	 * which can be used to invite new users to the organization.
	 *
	 * @see https://zulip.com/api/create-invite-link
	 */
	createInviteLink: { params: CreateInviteLinkParams; response: CreateInviteLinkResponse };
	/**
	 * Revoke an email invitation
	 *
	 * Revoke an [email invitation](https://zulip.com/help/invite-new-users#send-email-invitations).
	 *
	 * @see https://zulip.com/api/revoke-email-invite
	 */
	revokeEmailInvite: { params: RevokeEmailInviteParams; response: RevokeEmailInviteResponse };
	/**
	 * Revoke a reusable invitation link
	 *
	 * Revoke a [reusable invitation link](https://zulip.com/help/invite-new-users#create-a-reusable-invitation-link).
	 *
	 * @see https://zulip.com/api/revoke-invite-link
	 */
	revokeInviteLink: { params: RevokeInviteLinkParams; response: RevokeInviteLinkResponse };
	/**
	 * Resend an email invitation
	 *
	 * Resend an [email invitation](https://zulip.com/help/invite-new-users#send-email-invitations).
	 *
	 * @see https://zulip.com/api/resend-email-invite
	 */
	resendEmailInvite: { params: ResendEmailInviteParams; response: ResendEmailInviteResponse };
	/**
	 * Test welcome bot custom message
	 *
	 * Sends a test Welcome Bot custom message to the acting administrator.
	 * This allows administrators to preview how the custom welcome message will
	 * appear when received by new users upon joining the organization.
	 *
	 * New in Zulip 11.0 (feature level 416).
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/test-welcome-bot-custom-message
	 */
	testWelcomeBotCustomMessage: { params: TestWelcomeBotCustomMessageParams; response: TestWelcomeBotCustomMessageResponse };
	/**
	 * Register an event queue
	 *
	 * This powerful endpoint can be used to register a Zulip "event queue"
	 * (subscribed to certain types of "events", or updates to the messages
	 * and other Zulip data the current user has access to), as well as to
	 * fetch the current state of that data.
	 *
	 * New in Zulip 12.0 (feature level 481).
	 *
	 * @see https://zulip.com/api/register-queue
	 */
	registerQueue: { params: RegisterQueueParams; response: RegisterQueueResponse };
	/**
	 * Get server settings
	 *
	 * Fetch global settings for a Zulip server.
	 *
	 * @see https://zulip.com/api/get-server-settings
	 */
	getServerSettings: { params: GetServerSettingsParams; response: GetServerSettingsResponse };
	/**
	 * Update settings
	 *
	 * This endpoint is used to edit the current user's settings.
	 *
	 * @see https://zulip.com/api/update-settings
	 */
	updateSettings: { params: UpdateSettingsParams; response: UpdateSettingsResponse };
	/**
	 * Get channel subscribers
	 *
	 * Get all users subscribed to a channel.
	 *
	 * @see https://zulip.com/api/get-subscribers
	 */
	getSubscribers: { params: GetSubscribersParams; response: GetSubscribersResponse };
	/**
	 * Get all channels
	 *
	 * Get all channels that the user [has access to](https://zulip.com/help/channel-permissions).
	 *
	 * @see https://zulip.com/api/get-streams
	 */
	getStreams: { params: GetStreamsParams; response: GetStreamsResponse };
	/**
	 * Get a channel by ID
	 *
	 * Fetch details for the channel with the ID `stream_id`.
	 *
	 * New in Zulip 6.0 (feature level 132).
	 *
	 * @see https://zulip.com/api/get-stream-by-id
	 */
	getStreamById: { params: GetStreamByIdParams; response: GetStreamByIdResponse };
	/**
	 * Archive a channel
	 *
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/archive-stream
	 */
	archiveStream: { params: ArchiveStreamParams; response: ArchiveStreamResponse };
	/**
	 * Update a channel
	 *
	 * Configure the channel with the ID `stream_id`. This endpoint supports
	 * an organization administrator editing any property of a channel,
	 * including:
	 *
	 * @see https://zulip.com/api/update-stream
	 */
	updateStream: { params: UpdateStreamParams; response: UpdateStreamResponse };
	/**
	 * Get channel's email address
	 *
	 * Get email address of a channel.
	 *
	 * New in Zulip 8.0 (feature level 226).
	 *
	 * @see https://zulip.com/api/get-stream-email-address
	 */
	getStreamEmailAddress: { params: GetStreamEmailAddressParams; response: GetStreamEmailAddressResponse };
	/**
	 * Delete a topic
	 *
	 * Delete all messages in a topic.
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/delete-topic
	 */
	deleteTopic: { params: DeleteTopicParams; response: DeleteTopicResponse };
	/**
	 * Set "typing" status
	 *
	 * Notify other users whether the current user is
	 * [typing a message][help-typing].
	 *
	 * @see https://zulip.com/api/set-typing-status
	 */
	setTypingStatus: { params: SetTypingStatusParams; response: SetTypingStatusResponse };
	/**
	 * Set "typing" status for message editing
	 *
	 * Notify other users whether the current user is editing a message.
	 *
	 * New in Zulip 10.0 (feature level 351).
	 *
	 * @see https://zulip.com/api/set-typing-status-for-message-edit
	 */
	setTypingStatusForMessageEdit: { params: SetTypingStatusForMessageEditParams; response: SetTypingStatusForMessageEditResponse };
	/**
	 * Create a channel
	 *
	 * Create a new [channel](https://zulip.com/help/create-channels), and optionally subscribe
	 * users to the newly created channel.
	 *
	 * New in Zulip 11.0 (feature level 417).
	 *
	 * @see https://zulip.com/api/create-channel
	 */
	createChannel: { params: CreateChannelParams; response: CreateChannelResponse };
	/**
	 * Create a user group
	 *
	 * Create a new [user group](https://zulip.com/help/user-groups).
	 *
	 * @see https://zulip.com/api/create-user-group
	 */
	createUserGroup: { params: CreateUserGroupParams; response: CreateUserGroupResponse };
	/**
	 * Update user group members
	 *
	 * Update the members of a [user group](https://zulip.com/help/user-groups). The
	 * user IDs must correspond to non-deactivated users.
	 *
	 * @see https://zulip.com/api/update-user-group-members
	 */
	updateUserGroupMembers: { params: UpdateUserGroupMembersParams; response: UpdateUserGroupMembersResponse };
	/**
	 * Get user group members
	 *
	 * Get the members of a [user group](https://zulip.com/help/user-groups).
	 *
	 * New in Zulip 6.0 (feature level 127).
	 *
	 * @see https://zulip.com/api/get-user-group-members
	 */
	getUserGroupMembers: { params: GetUserGroupMembersParams; response: GetUserGroupMembersResponse };
	/**
	 * Update a user group
	 *
	 * Update the name, description or any of the permission settings
	 * of a [user group](https://zulip.com/help/user-groups).
	 *
	 * @see https://zulip.com/api/update-user-group
	 */
	updateUserGroup: { params: UpdateUserGroupParams; response: UpdateUserGroupResponse };
	/**
	 * Get user groups
	 *
	 * Fetches all of the user groups in the organization.
	 *
	 * @see https://zulip.com/api/get-user-groups
	 */
	getUserGroups: { params: GetUserGroupsParams; response: GetUserGroupsResponse };
	/**
	 * Update subgroups of a user group
	 *
	 * Update the subgroups of a [user group](https://zulip.com/help/user-groups).
	 *
	 * New in Zulip 6.0 (feature level 127).
	 *
	 * @see https://zulip.com/api/update-user-group-subgroups
	 */
	updateUserGroupSubgroups: { params: UpdateUserGroupSubgroupsParams; response: UpdateUserGroupSubgroupsResponse };
	/**
	 * Get subgroups of a user group
	 *
	 * Get the subgroups of a [user group](https://zulip.com/help/user-groups).
	 *
	 * New in Zulip 6.0 (feature level 127).
	 *
	 * @see https://zulip.com/api/get-user-group-subgroups
	 */
	getUserGroupSubgroups: { params: GetUserGroupSubgroupsParams; response: GetUserGroupSubgroupsResponse };
	/**
	 * Get user group membership status
	 *
	 * Check whether a user is member of user group.
	 *
	 * New in Zulip 6.0 (feature level 127).
	 *
	 * @see https://zulip.com/api/get-is-user-group-member
	 */
	getIsUserGroupMember: { params: GetIsUserGroupMemberParams; response: GetIsUserGroupMemberResponse };
	/**
	 * Deactivate a user group
	 *
	 * Deactivate a user group. Deactivated user groups cannot be
	 * used for mentions, permissions, or any other purpose, but can
	 * be reactivated or renamed.
	 *
	 * New in Zulip 10.0 (feature level 290).
	 *
	 * @see https://zulip.com/api/deactivate-user-group
	 */
	deactivateUserGroup: { params: DeactivateUserGroupParams; response: DeactivateUserGroupResponse };
	/**
	 * Create a channel folder
	 *
	 * Create a new [channel folder](https://zulip.com/help/channel-folders).
	 *
	 * New in Zulip 11.0 (feature level 389).
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/create-channel-folder
	 */
	createChannelFolder: { params: CreateChannelFolderParams; response: CreateChannelFolderResponse };
	/**
	 * Get channel folders
	 *
	 * Fetches all of the [channel folders](https://zulip.com/help/channel-folders) in the
	 * organization, sorted by the `order` field.
	 *
	 * New in Zulip 11.0 (feature level 389).
	 *
	 * @see https://zulip.com/api/get-channel-folders
	 */
	getChannelFolders: { params: GetChannelFoldersParams; response: GetChannelFoldersResponse };
	/**
	 * Reorder channel folders
	 *
	 * Reorder the [channel folders](https://zulip.com/help/channel-folders) in the user's
	 * organization.
	 *
	 * New in Zulip 11.0 (feature level 414).
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/patch-channel-folders
	 */
	patchChannelFolders: { params: PatchChannelFoldersParams; response: PatchChannelFoldersResponse };
	/**
	 * Update a channel folder
	 *
	 * Update the name or description of a [channel folder](https://zulip.com/help/channel-folders)
	 * with the specified ID.
	 *
	 * New in Zulip 11.0 (feature level 389).
	 *
	 * Needs an organization administrator.
	 *
	 * @see https://zulip.com/api/update-channel-folder
	 */
	updateChannelFolder: { params: UpdateChannelFolderParams; response: UpdateChannelFolderResponse };
	/**
	 * Get a bot's API key
	 *
	 * Fetch the API key for a bot user. Only the bot's owner and
	 * organization administrators have access to a bot's API key.
	 *
	 * New in Zulip 12.0 (feature level 463).
	 *
	 * @see https://zulip.com/api/get-bot-api-key
	 */
	getBotApiKey: { params: GetBotApiKeyParams; response: GetBotApiKeyResponse };
	/**
	 * Regenerate a bot's API key
	 *
	 * Generate a new API key for a bot user. Only the bot's owner and
	 * organization administrators have access to a bot's API key.
	 *
	 * @see https://zulip.com/api/regenerate-bot-api-key
	 */
	regenerateBotApiKey: { params: RegenerateBotApiKeyParams; response: RegenerateBotApiKeyResponse };
	/**
	 * Error handling
	 *
	 * Common error to many endpoints
	 *
	 * @see https://zulip.com/api/rest-error-handling
	 */
	restErrorHandling: { params: RestErrorHandlingParams; response: RestErrorHandlingResponse };
	/**
	 * Outgoing webhooks
	 *
	 * Outgoing webhooks allow you to build or set up Zulip integrations which are
	 * notified when certain types of messages are sent in Zulip.
	 *
	 * @see https://zulip.com/api/zulip-outgoing-webhooks
	 */
	zulipOutgoingWebhooks: { params: ZulipOutgoingWebhooksParams; response: ZulipOutgoingWebhooksResponse };
	/**
	 * Create BigBlueButton video call
	 *
	 * Create a video call URL for a BigBlueButton video call.
	 * Requires [BigBlueButton 2.4+](https://zulip.com/integrations/big-blue-button)
	 * to be configured on the Zulip server.
	 *
	 * @see https://zulip.com/api/create-big-blue-button-video-call
	 */
	createBigBlueButtonVideoCall: { params: CreateBigBlueButtonVideoCallParams; response: CreateBigBlueButtonVideoCallResponse };
	/**
	 * Create Nextcloud Talk video call
	 *
	 * Create a video call URL for a Nextcloud Talk video call. Requires
	 * [Nextcloud Talk](https://zulip.com/integrations/nextcloud-talk) to be configured on the
	 * Zulip server.
	 *
	 * New in Zulip 12.0 (feature level 465).
	 *
	 * @see https://zulip.com/api/create-nextcloud-talk-video-call
	 */
	createNextcloudTalkVideoCall: { params: CreateNextcloudTalkVideoCallParams; response: CreateNextcloudTalkVideoCallResponse };
	/**
	 * Create Webex video call
	 *
	 * Create a video call URL for a Webex video call.
	 *
	 * New in Zulip 12.0 (feature level 493).
	 *
	 * @see https://zulip.com/api/create-webex-video-call
	 */
	createWebexVideoCall: { params: CreateWebexVideoCallParams; response: CreateWebexVideoCallResponse };
	/**
	 * Create Constructor Groups video call
	 *
	 * Create a video call URL for a Constructor Groups video call.
	 * Requires [Constructor Groups](https://zulip.com/integrations/constructor-groups)
	 * to be configured on the Zulip server.
	 *
	 * New in Zulip 12.0 (feature level 460).
	 *
	 * @see https://zulip.com/api/create-constructor-groups-video-call
	 */
	createConstructorGroupsVideoCall: { params: CreateConstructorGroupsVideoCallParams; response: CreateConstructorGroupsVideoCallResponse };
}

/** How each operation's parameters are sent. */
export const OPERATIONS = {
	"fetchApiKey": {
		"method": "POST",
		"path": "/fetch_api_key",
		"query": [],
		"json": [],
		"multipart": false
	},
	"jwtFetchApiKey": {
		"method": "POST",
		"path": "/jwt/fetch_api_key",
		"query": [],
		"json": [],
		"multipart": false
	},
	"devFetchApiKey": {
		"method": "POST",
		"path": "/dev_fetch_api_key",
		"query": [],
		"json": [],
		"multipart": false
	},
	"devListUsers": {
		"method": "GET",
		"path": "/dev_list_users",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getEvents": {
		"method": "GET",
		"path": "/events",
		"query": [
			"queue_id",
			"last_event_id",
			"dont_block"
		],
		"json": [],
		"multipart": false
	},
	"deleteQueue": {
		"method": "DELETE",
		"path": "/events",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getStreamId": {
		"method": "GET",
		"path": "/get_stream_id",
		"query": [
			"stream"
		],
		"json": [],
		"multipart": false
	},
	"markAllAsRead": {
		"method": "POST",
		"path": "/mark_all_as_read",
		"query": [],
		"json": [],
		"multipart": false
	},
	"markStreamAsRead": {
		"method": "POST",
		"path": "/mark_stream_as_read",
		"query": [],
		"json": [
			"stream_id"
		],
		"multipart": false
	},
	"markTopicAsRead": {
		"method": "POST",
		"path": "/mark_topic_as_read",
		"query": [],
		"json": [
			"stream_id"
		],
		"multipart": false
	},
	"getAttachments": {
		"method": "GET",
		"path": "/attachments",
		"query": [],
		"json": [],
		"multipart": false
	},
	"removeAttachment": {
		"method": "DELETE",
		"path": "/attachments/{attachment_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getBotStorage": {
		"method": "GET",
		"path": "/bot_storage",
		"query": [
			"keys"
		],
		"json": [
			"keys"
		],
		"multipart": false
	},
	"updateBotStorage": {
		"method": "PUT",
		"path": "/bot_storage",
		"query": [],
		"json": [
			"storage"
		],
		"multipart": false
	},
	"removeBotStorage": {
		"method": "DELETE",
		"path": "/bot_storage",
		"query": [],
		"json": [
			"keys"
		],
		"multipart": false
	},
	"getDrafts": {
		"method": "GET",
		"path": "/drafts",
		"query": [],
		"json": [],
		"multipart": false
	},
	"createDrafts": {
		"method": "POST",
		"path": "/drafts",
		"query": [],
		"json": [
			"drafts"
		],
		"multipart": false
	},
	"editDraft": {
		"method": "PATCH",
		"path": "/drafts/{draft_id}",
		"query": [],
		"json": [
			"draft"
		],
		"multipart": false
	},
	"deleteDraft": {
		"method": "DELETE",
		"path": "/drafts/{draft_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getNavigationViews": {
		"method": "GET",
		"path": "/navigation_views",
		"query": [],
		"json": [],
		"multipart": false
	},
	"addNavigationView": {
		"method": "POST",
		"path": "/navigation_views",
		"query": [],
		"json": [],
		"multipart": false
	},
	"editNavigationView": {
		"method": "PATCH",
		"path": "/navigation_views/{fragment}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"removeNavigationView": {
		"method": "DELETE",
		"path": "/navigation_views/{fragment}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getSavedSnippets": {
		"method": "GET",
		"path": "/saved_snippets",
		"query": [],
		"json": [],
		"multipart": false
	},
	"createSavedSnippet": {
		"method": "POST",
		"path": "/saved_snippets",
		"query": [],
		"json": [],
		"multipart": false
	},
	"editSavedSnippet": {
		"method": "PATCH",
		"path": "/saved_snippets/{saved_snippet_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"deleteSavedSnippet": {
		"method": "DELETE",
		"path": "/saved_snippets/{saved_snippet_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getReminders": {
		"method": "GET",
		"path": "/reminders",
		"query": [],
		"json": [],
		"multipart": false
	},
	"createMessageReminder": {
		"method": "POST",
		"path": "/reminders",
		"query": [],
		"json": [],
		"multipart": false
	},
	"deleteReminder": {
		"method": "DELETE",
		"path": "/reminders/{reminder_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getScheduledMessages": {
		"method": "GET",
		"path": "/scheduled_messages",
		"query": [],
		"json": [],
		"multipart": false
	},
	"createScheduledMessage": {
		"method": "POST",
		"path": "/scheduled_messages",
		"query": [],
		"json": [
			"to",
			"scheduled_delivery_timestamp",
			"read_by_sender"
		],
		"multipart": false
	},
	"updateScheduledMessage": {
		"method": "PATCH",
		"path": "/scheduled_messages/{scheduled_message_id}",
		"query": [],
		"json": [
			"to",
			"scheduled_delivery_timestamp"
		],
		"multipart": false
	},
	"deleteScheduledMessage": {
		"method": "DELETE",
		"path": "/scheduled_messages/{scheduled_message_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"addDefaultStream": {
		"method": "POST",
		"path": "/default_streams",
		"query": [],
		"json": [
			"stream_id"
		],
		"multipart": false
	},
	"removeDefaultStream": {
		"method": "DELETE",
		"path": "/default_streams",
		"query": [],
		"json": [
			"stream_id"
		],
		"multipart": false
	},
	"getMessages": {
		"method": "GET",
		"path": "/messages",
		"query": [
			"anchor",
			"include_anchor",
			"anchor_date",
			"num_before",
			"num_after",
			"narrow",
			"client_gravatar",
			"apply_markdown",
			"use_first_unread_anchor",
			"message_ids",
			"allow_empty_topic_name"
		],
		"json": [
			"narrow",
			"message_ids"
		],
		"multipart": false
	},
	"sendMessage": {
		"method": "POST",
		"path": "/messages",
		"query": [],
		"json": [
			"to",
			"read_by_sender"
		],
		"multipart": false
	},
	"getMessageHistory": {
		"method": "GET",
		"path": "/messages/{message_id}/history",
		"query": [
			"allow_empty_topic_name"
		],
		"json": [],
		"multipart": false
	},
	"updateMessageFlags": {
		"method": "POST",
		"path": "/messages/flags",
		"query": [],
		"json": [
			"messages"
		],
		"multipart": false
	},
	"updateMessageFlagsForNarrow": {
		"method": "POST",
		"path": "/messages/flags/narrow",
		"query": [],
		"json": [
			"include_anchor",
			"num_before",
			"num_after",
			"narrow"
		],
		"multipart": false
	},
	"renderMessage": {
		"method": "POST",
		"path": "/messages/render",
		"query": [],
		"json": [],
		"multipart": false
	},
	"addReaction": {
		"method": "POST",
		"path": "/messages/{message_id}/reactions",
		"query": [],
		"json": [],
		"multipart": false
	},
	"removeReaction": {
		"method": "DELETE",
		"path": "/messages/{message_id}/reactions",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getReadReceipts": {
		"method": "GET",
		"path": "/messages/{message_id}/read_receipts",
		"query": [],
		"json": [],
		"multipart": false
	},
	"checkMessagesMatchNarrow": {
		"method": "GET",
		"path": "/messages/matches_narrow",
		"query": [
			"msg_ids",
			"narrow"
		],
		"json": [
			"msg_ids",
			"narrow"
		],
		"multipart": false
	},
	"getMessage": {
		"method": "GET",
		"path": "/messages/{message_id}",
		"query": [
			"apply_markdown",
			"allow_empty_topic_name"
		],
		"json": [],
		"multipart": false
	},
	"updateMessage": {
		"method": "PATCH",
		"path": "/messages/{message_id}",
		"query": [],
		"json": [
			"send_notification_to_old_thread",
			"send_notification_to_new_thread",
			"stream_id"
		],
		"multipart": false
	},
	"deleteMessage": {
		"method": "DELETE",
		"path": "/messages/{message_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"reportMessage": {
		"method": "POST",
		"path": "/messages/{message_id}/report",
		"query": [],
		"json": [],
		"multipart": false
	},
	"uploadFile": {
		"method": "POST",
		"path": "/user_uploads",
		"query": [],
		"json": [],
		"multipart": true
	},
	"checkThumbnailStatus": {
		"method": "GET",
		"path": "/thumbnail/status/{realm_id_str}/{filename}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getFileTemporaryUrl": {
		"method": "GET",
		"path": "/user_uploads/{realm_id_str}/{filename}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getUsers": {
		"method": "GET",
		"path": "/users",
		"query": [
			"client_gravatar",
			"include_custom_profile_fields",
			"user_ids"
		],
		"json": [
			"user_ids"
		],
		"multipart": false
	},
	"createUser": {
		"method": "POST",
		"path": "/users",
		"query": [],
		"json": [],
		"multipart": false
	},
	"reactivateUser": {
		"method": "POST",
		"path": "/users/{user_id}/reactivate",
		"query": [],
		"json": [],
		"multipart": false
	},
	"updateStatusForUser": {
		"method": "POST",
		"path": "/users/{user_id}/status",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getUserStatus": {
		"method": "GET",
		"path": "/users/{user_id}/status",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getUserPresence": {
		"method": "GET",
		"path": "/users/{user_id_or_email}/presence",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getOwnUser": {
		"method": "GET",
		"path": "/users/me",
		"query": [],
		"json": [],
		"multipart": false
	},
	"deactivateOwnUser": {
		"method": "DELETE",
		"path": "/users/me",
		"query": [],
		"json": [],
		"multipart": false
	},
	"regenerateApiKey": {
		"method": "POST",
		"path": "/users/me/api_key/regenerate",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getAlertWords": {
		"method": "GET",
		"path": "/users/me/alert_words",
		"query": [],
		"json": [],
		"multipart": false
	},
	"addAlertWords": {
		"method": "POST",
		"path": "/users/me/alert_words",
		"query": [],
		"json": [
			"alert_words"
		],
		"multipart": false
	},
	"removeAlertWords": {
		"method": "DELETE",
		"path": "/users/me/alert_words",
		"query": [],
		"json": [
			"alert_words"
		],
		"multipart": false
	},
	"updatePresence": {
		"method": "POST",
		"path": "/users/me/presence",
		"query": [],
		"json": [],
		"multipart": false
	},
	"updateProfileData": {
		"method": "PATCH",
		"path": "/users/me/profile_data",
		"query": [],
		"json": [
			"data"
		],
		"multipart": false
	},
	"removeProfileData": {
		"method": "DELETE",
		"path": "/users/me/profile_data",
		"query": [],
		"json": [
			"data"
		],
		"multipart": false
	},
	"updateStatus": {
		"method": "POST",
		"path": "/users/me/status",
		"query": [],
		"json": [
			"away"
		],
		"multipart": false
	},
	"getStreamTopics": {
		"method": "GET",
		"path": "/users/me/{stream_id}/topics",
		"query": [
			"allow_empty_topic_name"
		],
		"json": [],
		"multipart": false
	},
	"getSubscriptions": {
		"method": "GET",
		"path": "/users/me/subscriptions",
		"query": [
			"include_subscribers"
		],
		"json": [],
		"multipart": false
	},
	"subscribe": {
		"method": "POST",
		"path": "/users/me/subscriptions",
		"query": [],
		"json": [
			"subscriptions",
			"principals",
			"authorization_errors_fatal",
			"announce",
			"invite_only",
			"is_web_public",
			"is_default_stream",
			"history_public_to_subscribers",
			"topics_policy",
			"can_add_subscribers_group",
			"can_remove_subscribers_group",
			"can_administer_channel_group",
			"can_delete_any_message_group",
			"can_delete_own_message_group",
			"can_move_messages_out_of_channel_group",
			"can_move_messages_within_channel_group",
			"can_send_message_group",
			"can_subscribe_group",
			"can_resolve_topics_group",
			"can_create_topic_group",
			"folder_id"
		],
		"multipart": false
	},
	"updateSubscriptions": {
		"method": "PATCH",
		"path": "/users/me/subscriptions",
		"query": [],
		"json": [
			"delete",
			"add"
		],
		"multipart": false
	},
	"unsubscribe": {
		"method": "DELETE",
		"path": "/users/me/subscriptions",
		"query": [],
		"json": [
			"subscriptions",
			"principals"
		],
		"multipart": false
	},
	"muteTopic": {
		"method": "PATCH",
		"path": "/users/me/subscriptions/muted_topics",
		"query": [],
		"json": [
			"stream_id"
		],
		"multipart": false
	},
	"testNotify": {
		"method": "POST",
		"path": "/mobile_push/test_notification",
		"query": [],
		"json": [],
		"multipart": false
	},
	"e2eeTestNotify": {
		"method": "POST",
		"path": "/mobile_push/e2ee/test_notification",
		"query": [],
		"json": [],
		"multipart": false
	},
	"registerPushDevice": {
		"method": "POST",
		"path": "/mobile_push/register",
		"query": [],
		"json": [],
		"multipart": false
	},
	"registerRemotePushDevice": {
		"method": "POST",
		"path": "/remotes/push/e2ee/register",
		"query": [],
		"json": [],
		"multipart": false
	},
	"registerClientDevice": {
		"method": "POST",
		"path": "/register_client_device",
		"query": [],
		"json": [],
		"multipart": false
	},
	"removeClientDevice": {
		"method": "POST",
		"path": "/remove_client_device",
		"query": [],
		"json": [],
		"multipart": false
	},
	"updateUserTopic": {
		"method": "POST",
		"path": "/user_topics",
		"query": [],
		"json": [
			"stream_id",
			"visibility_policy"
		],
		"multipart": false
	},
	"muteUser": {
		"method": "POST",
		"path": "/users/me/muted_users/{muted_user_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"unmuteUser": {
		"method": "DELETE",
		"path": "/users/me/muted_users/{muted_user_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"addApnsToken": {
		"method": "POST",
		"path": "/users/me/apns_device_token",
		"query": [],
		"json": [],
		"multipart": false
	},
	"removeApnsToken": {
		"method": "DELETE",
		"path": "/users/me/apns_device_token",
		"query": [],
		"json": [],
		"multipart": false
	},
	"addFcmToken": {
		"method": "POST",
		"path": "/users/me/android_gcm_reg_id",
		"query": [],
		"json": [],
		"multipart": false
	},
	"removeFcmToken": {
		"method": "DELETE",
		"path": "/users/me/android_gcm_reg_id",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getSubscriptionStatus": {
		"method": "GET",
		"path": "/users/{user_id}/subscriptions/{stream_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getUserChannels": {
		"method": "GET",
		"path": "/users/{user_id}/channels",
		"query": [],
		"json": [],
		"multipart": false
	},
	"uploadCustomEmoji": {
		"method": "POST",
		"path": "/realm/emoji/{emoji_name}",
		"query": [],
		"json": [],
		"multipart": true
	},
	"deactivateCustomEmoji": {
		"method": "DELETE",
		"path": "/realm/emoji/{emoji_name}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getCustomEmoji": {
		"method": "GET",
		"path": "/realm/emoji",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getPresence": {
		"method": "GET",
		"path": "/realm/presence",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getRealmDomains": {
		"method": "GET",
		"path": "/realm/domains",
		"query": [],
		"json": [],
		"multipart": false
	},
	"addRealmDomain": {
		"method": "POST",
		"path": "/realm/domains",
		"query": [],
		"json": [],
		"multipart": false
	},
	"patchRealmDomain": {
		"method": "PATCH",
		"path": "/realm/domains/{domain}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"deleteRealmDomain": {
		"method": "DELETE",
		"path": "/realm/domains/{domain}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getCustomProfileFields": {
		"method": "GET",
		"path": "/realm/profile_fields",
		"query": [],
		"json": [],
		"multipart": false
	},
	"reorderCustomProfileFields": {
		"method": "PATCH",
		"path": "/realm/profile_fields",
		"query": [],
		"json": [
			"order"
		],
		"multipart": false
	},
	"createCustomProfileField": {
		"method": "POST",
		"path": "/realm/profile_fields",
		"query": [],
		"json": [
			"field_type",
			"field_data",
			"display_in_profile_summary",
			"required",
			"editable_by_user",
			"use_for_user_matching"
		],
		"multipart": false
	},
	"updateRealmUserSettingsDefaults": {
		"method": "PATCH",
		"path": "/realm/user_settings_defaults",
		"query": [],
		"json": [
			"starred_message_counts",
			"receives_typing_notifications",
			"web_suggest_update_timezone",
			"fluid_layout_width",
			"high_contrast_mode",
			"web_mark_read_on_scroll_policy",
			"web_channel_default_view",
			"web_font_size_px",
			"web_line_height_percent",
			"color_scheme",
			"enable_drafts_synchronization",
			"translate_emoticons",
			"display_emoji_reaction_users",
			"web_escape_navigates_to_home_view",
			"left_side_userlist",
			"demote_inactive_streams",
			"user_list_style",
			"web_stream_unreads_count_display_policy",
			"hide_ai_features",
			"web_inbox_show_channel_folders",
			"web_left_sidebar_show_channel_folders",
			"web_left_sidebar_unreads_count_summary",
			"enable_stream_desktop_notifications",
			"enable_stream_email_notifications",
			"enable_stream_push_notifications",
			"enable_stream_audible_notifications",
			"enable_desktop_notifications",
			"enable_sounds",
			"enable_followed_topic_desktop_notifications",
			"enable_followed_topic_email_notifications",
			"enable_followed_topic_push_notifications",
			"enable_followed_topic_audible_notifications",
			"email_notifications_batching_period_seconds",
			"enable_offline_email_notifications",
			"enable_offline_push_notifications",
			"enable_online_push_notifications",
			"enable_digest_emails",
			"message_content_in_email_notifications",
			"pm_content_in_desktop_notifications",
			"wildcard_mentions_notify",
			"enable_followed_topic_wildcard_mentions_notify",
			"desktop_icon_count_display",
			"realm_name_in_email_notifications_policy",
			"automatically_follow_topics_policy",
			"automatically_unmute_topics_in_muted_streams_policy",
			"automatically_follow_topics_where_mentioned",
			"presence_enabled",
			"enter_sends",
			"twenty_four_hour_time",
			"send_private_typing_notifications",
			"send_stream_typing_notifications",
			"send_read_receipts",
			"email_address_visibility",
			"web_navigate_to_sent_message"
		],
		"multipart": false
	},
	"updateSubscriptionSettings": {
		"method": "POST",
		"path": "/users/me/subscriptions/properties",
		"query": [],
		"json": [
			"subscription_data"
		],
		"multipart": false
	},
	"updateSubscriptionProperty": {
		"method": "PATCH",
		"path": "/users/me/subscriptions/{stream_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getUserByEmail": {
		"method": "GET",
		"path": "/users/{email}",
		"query": [
			"client_gravatar",
			"include_custom_profile_fields"
		],
		"json": [],
		"multipart": false
	},
	"updateUserByEmail": {
		"method": "PATCH",
		"path": "/users/{email}",
		"query": [],
		"json": [
			"role",
			"profile_data"
		],
		"multipart": false
	},
	"getUser": {
		"method": "GET",
		"path": "/users/{user_id}",
		"query": [
			"client_gravatar",
			"include_custom_profile_fields"
		],
		"json": [],
		"multipart": false
	},
	"updateUser": {
		"method": "PATCH",
		"path": "/users/{user_id}",
		"query": [],
		"json": [
			"role",
			"profile_data"
		],
		"multipart": false
	},
	"deactivateUser": {
		"method": "DELETE",
		"path": "/users/{user_id}",
		"query": [
			"actions"
		],
		"json": [
			"actions"
		],
		"multipart": false
	},
	"getLinkifiers": {
		"method": "GET",
		"path": "/realm/linkifiers",
		"query": [],
		"json": [],
		"multipart": false
	},
	"reorderLinkifiers": {
		"method": "PATCH",
		"path": "/realm/linkifiers",
		"query": [],
		"json": [
			"ordered_linkifier_ids"
		],
		"multipart": false
	},
	"addLinkifier": {
		"method": "POST",
		"path": "/realm/filters",
		"query": [],
		"json": [
			"alternative_url_templates"
		],
		"multipart": false
	},
	"removeLinkifier": {
		"method": "DELETE",
		"path": "/realm/filters/{filter_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"updateLinkifier": {
		"method": "PATCH",
		"path": "/realm/filters/{filter_id}",
		"query": [],
		"json": [
			"alternative_url_templates"
		],
		"multipart": false
	},
	"addCodePlayground": {
		"method": "POST",
		"path": "/realm/playgrounds",
		"query": [],
		"json": [],
		"multipart": false
	},
	"removeCodePlayground": {
		"method": "DELETE",
		"path": "/realm/playgrounds/{playground_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getRealmExports": {
		"method": "GET",
		"path": "/export/realm",
		"query": [],
		"json": [],
		"multipart": false
	},
	"exportRealm": {
		"method": "POST",
		"path": "/export/realm",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getRealmExportConsents": {
		"method": "GET",
		"path": "/export/realm/consents",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getInvites": {
		"method": "GET",
		"path": "/invites",
		"query": [],
		"json": [],
		"multipart": false
	},
	"sendInvites": {
		"method": "POST",
		"path": "/invites",
		"query": [],
		"json": [
			"invite_expires_in_minutes",
			"stream_ids",
			"group_ids"
		],
		"multipart": false
	},
	"createInviteLink": {
		"method": "POST",
		"path": "/invites/multiuse",
		"query": [],
		"json": [
			"invite_expires_in_minutes",
			"stream_ids",
			"group_ids"
		],
		"multipart": false
	},
	"revokeEmailInvite": {
		"method": "DELETE",
		"path": "/invites/{invite_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"revokeInviteLink": {
		"method": "DELETE",
		"path": "/invites/multiuse/{invite_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"resendEmailInvite": {
		"method": "POST",
		"path": "/invites/{invite_id}/resend",
		"query": [],
		"json": [],
		"multipart": false
	},
	"testWelcomeBotCustomMessage": {
		"method": "POST",
		"path": "/realm/test_welcome_bot_custom_message",
		"query": [],
		"json": [],
		"multipart": false
	},
	"registerQueue": {
		"method": "POST",
		"path": "/register",
		"query": [],
		"json": [
			"apply_markdown",
			"client_gravatar",
			"slim_presence",
			"event_types",
			"all_public_streams",
			"client_capabilities",
			"fetch_event_types",
			"narrow",
			"idle_queue_timeout"
		],
		"multipart": false
	},
	"getServerSettings": {
		"method": "GET",
		"path": "/server_settings",
		"query": [],
		"json": [],
		"multipart": false
	},
	"updateSettings": {
		"method": "PATCH",
		"path": "/settings",
		"query": [],
		"json": [
			"target_users",
			"twenty_four_hour_time",
			"web_mark_read_on_scroll_policy",
			"web_channel_default_view",
			"starred_message_counts",
			"receives_typing_notifications",
			"web_suggest_update_timezone",
			"fluid_layout_width",
			"high_contrast_mode",
			"web_font_size_px",
			"web_line_height_percent",
			"color_scheme",
			"enable_drafts_synchronization",
			"translate_emoticons",
			"display_emoji_reaction_users",
			"web_escape_navigates_to_home_view",
			"left_side_userlist",
			"demote_inactive_streams",
			"user_list_style",
			"web_stream_unreads_count_display_policy",
			"hide_ai_features",
			"web_inbox_show_channel_folders",
			"web_left_sidebar_show_channel_folders",
			"web_left_sidebar_unreads_count_summary",
			"enable_stream_desktop_notifications",
			"enable_stream_email_notifications",
			"enable_stream_push_notifications",
			"enable_stream_audible_notifications",
			"enable_desktop_notifications",
			"enable_sounds",
			"email_notifications_batching_period_seconds",
			"enable_offline_email_notifications",
			"enable_offline_push_notifications",
			"enable_online_push_notifications",
			"enable_followed_topic_desktop_notifications",
			"enable_followed_topic_email_notifications",
			"enable_followed_topic_push_notifications",
			"enable_followed_topic_audible_notifications",
			"enable_digest_emails",
			"enable_marketing_emails",
			"enable_login_emails",
			"message_content_in_email_notifications",
			"pm_content_in_desktop_notifications",
			"wildcard_mentions_notify",
			"enable_followed_topic_wildcard_mentions_notify",
			"desktop_icon_count_display",
			"realm_name_in_email_notifications_policy",
			"automatically_follow_topics_policy",
			"automatically_unmute_topics_in_muted_streams_policy",
			"automatically_follow_topics_where_mentioned",
			"presence_enabled",
			"enter_sends",
			"send_private_typing_notifications",
			"send_stream_typing_notifications",
			"send_read_receipts",
			"allow_private_data_export",
			"email_address_visibility",
			"web_navigate_to_sent_message"
		],
		"multipart": false
	},
	"getSubscribers": {
		"method": "GET",
		"path": "/streams/{stream_id}/members",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getStreams": {
		"method": "GET",
		"path": "/streams",
		"query": [
			"include_public",
			"include_web_public",
			"include_subscribed",
			"exclude_archived",
			"include_all_active",
			"include_all",
			"include_default",
			"include_owner_subscribed",
			"include_can_access_content"
		],
		"json": [],
		"multipart": false
	},
	"getStreamById": {
		"method": "GET",
		"path": "/streams/{stream_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"archiveStream": {
		"method": "DELETE",
		"path": "/streams/{stream_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"updateStream": {
		"method": "PATCH",
		"path": "/streams/{stream_id}",
		"query": [],
		"json": [
			"is_private",
			"is_web_public",
			"history_public_to_subscribers",
			"is_default_stream",
			"folder_id",
			"can_add_subscribers_group",
			"can_remove_subscribers_group",
			"can_administer_channel_group",
			"can_delete_any_message_group",
			"can_delete_own_message_group",
			"can_move_messages_out_of_channel_group",
			"can_move_messages_within_channel_group",
			"can_send_message_group",
			"can_subscribe_group",
			"can_resolve_topics_group",
			"can_create_topic_group"
		],
		"multipart": false
	},
	"getStreamEmailAddress": {
		"method": "GET",
		"path": "/streams/{stream_id}/email_address",
		"query": [
			"sender_id"
		],
		"json": [],
		"multipart": false
	},
	"deleteTopic": {
		"method": "POST",
		"path": "/streams/{stream_id}/delete_topic",
		"query": [],
		"json": [],
		"multipart": false
	},
	"setTypingStatus": {
		"method": "POST",
		"path": "/typing",
		"query": [],
		"json": [
			"to",
			"stream_id"
		],
		"multipart": false
	},
	"setTypingStatusForMessageEdit": {
		"method": "POST",
		"path": "/messages/{message_id}/typing",
		"query": [],
		"json": [],
		"multipart": false
	},
	"createChannel": {
		"method": "POST",
		"path": "/channels/create",
		"query": [],
		"json": [
			"subscribers",
			"announce",
			"invite_only",
			"is_web_public",
			"is_default_stream",
			"folder_id",
			"topics_policy",
			"history_public_to_subscribers",
			"can_add_subscribers_group",
			"can_create_topic_group",
			"can_remove_subscribers_group",
			"can_administer_channel_group",
			"can_move_messages_out_of_channel_group",
			"can_move_messages_within_channel_group",
			"can_send_message_group",
			"can_subscribe_group",
			"can_resolve_topics_group"
		],
		"multipart": false
	},
	"createUserGroup": {
		"method": "POST",
		"path": "/user_groups/create",
		"query": [],
		"json": [
			"members",
			"subgroups",
			"can_add_members_group",
			"can_join_group",
			"can_leave_group",
			"can_manage_group",
			"can_mention_group",
			"can_remove_members_group"
		],
		"multipart": false
	},
	"updateUserGroupMembers": {
		"method": "POST",
		"path": "/user_groups/{user_group_id}/members",
		"query": [],
		"json": [
			"delete",
			"add",
			"delete_subgroups",
			"add_subgroups"
		],
		"multipart": false
	},
	"getUserGroupMembers": {
		"method": "GET",
		"path": "/user_groups/{user_group_id}/members",
		"query": [
			"direct_member_only"
		],
		"json": [],
		"multipart": false
	},
	"updateUserGroup": {
		"method": "PATCH",
		"path": "/user_groups/{user_group_id}",
		"query": [],
		"json": [
			"can_add_members_group",
			"can_join_group",
			"can_leave_group",
			"can_manage_group",
			"can_mention_group",
			"can_remove_members_group",
			"deactivated"
		],
		"multipart": false
	},
	"getUserGroups": {
		"method": "GET",
		"path": "/user_groups",
		"query": [],
		"json": [
			"include_deactivated_groups"
		],
		"multipart": false
	},
	"updateUserGroupSubgroups": {
		"method": "POST",
		"path": "/user_groups/{user_group_id}/subgroups",
		"query": [],
		"json": [
			"delete",
			"add"
		],
		"multipart": false
	},
	"getUserGroupSubgroups": {
		"method": "GET",
		"path": "/user_groups/{user_group_id}/subgroups",
		"query": [
			"direct_subgroup_only"
		],
		"json": [],
		"multipart": false
	},
	"getIsUserGroupMember": {
		"method": "GET",
		"path": "/user_groups/{user_group_id}/members/{user_id}",
		"query": [
			"direct_member_only"
		],
		"json": [],
		"multipart": false
	},
	"deactivateUserGroup": {
		"method": "POST",
		"path": "/user_groups/{user_group_id}/deactivate",
		"query": [],
		"json": [],
		"multipart": false
	},
	"createChannelFolder": {
		"method": "POST",
		"path": "/channel_folders/create",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getChannelFolders": {
		"method": "GET",
		"path": "/channel_folders",
		"query": [],
		"json": [
			"include_archived"
		],
		"multipart": false
	},
	"patchChannelFolders": {
		"method": "PATCH",
		"path": "/channel_folders",
		"query": [],
		"json": [
			"order"
		],
		"multipart": false
	},
	"updateChannelFolder": {
		"method": "PATCH",
		"path": "/channel_folders/{channel_folder_id}",
		"query": [],
		"json": [],
		"multipart": false
	},
	"getBotApiKey": {
		"method": "GET",
		"path": "/bots/{bot_id}/api_key",
		"query": [],
		"json": [],
		"multipart": false
	},
	"regenerateBotApiKey": {
		"method": "POST",
		"path": "/bots/{bot_id}/api_key/regenerate",
		"query": [],
		"json": [],
		"multipart": false
	},
	"restErrorHandling": {
		"method": "POST",
		"path": "/rest-error-handling",
		"query": [],
		"json": [],
		"multipart": false
	},
	"zulipOutgoingWebhooks": {
		"method": "POST",
		"path": "/zulip-outgoing-webhook",
		"query": [],
		"json": [],
		"multipart": false
	},
	"createBigBlueButtonVideoCall": {
		"method": "GET",
		"path": "/calls/bigbluebutton/create",
		"query": [
			"meeting_name",
			"voice_only"
		],
		"json": [],
		"multipart": false
	},
	"createNextcloudTalkVideoCall": {
		"method": "POST",
		"path": "/calls/nextcloud_talk/create",
		"query": [],
		"json": [],
		"multipart": false
	},
	"createWebexVideoCall": {
		"method": "POST",
		"path": "/calls/webex/create",
		"query": [],
		"json": [],
		"multipart": false
	},
	"createConstructorGroupsVideoCall": {
		"method": "POST",
		"path": "/calls/constructorgroups/create",
		"query": [],
		"json": [],
		"multipart": false
	}
} as const satisfies Record<keyof Operations, { method: string; path: string; query: readonly string[]; json: readonly string[]; multipart: boolean }>;
