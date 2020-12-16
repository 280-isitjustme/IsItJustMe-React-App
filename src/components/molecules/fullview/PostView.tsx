import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { ITag, Post, Tag } from '../../../rest/data/posts'
import * as NkReactLibrary from 'nk-react-library';
import StatsPreview from '../preview/StatsPreview'
import UserProfilePreview from '../preview/UserProfilePreview'
import MyAddressText from '../../atoms/MyAddressText';
import MyChip from '../../atoms/tag/MyTag';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import MyIcon from '../../atoms/MyIcon';
import { Utils } from 'nk-js-library';


export default function PostView({ post, authorView }: {
    post: Post,
    authorView: boolean
}) {

    return (
        <div>
            <br />

            <Row>
                <Col><h4>{post.data.content.title}</h4></Col>
                {authorView && <Col xs='auto'><NkReactLibrary.Components.Commons.NkDropdownMenu menu={[{
                    label: 'Edit',
                    onClick: () => {
                        NkReactLibrary.Utils.NkReactUtils.Redirect.redirect(`/post/${post.data._id}/update`);
                    }
                }, {
                    label: 'Delete',
                    onClick: () => {
                        NkReactLibrary.Utils.NkReactUtils.Redirect.redirect(`/post/${post.data._id}/delete`);
                    }
                }]} /></Col>}
            </Row>
            <hr />
            <NkReactLibrary.Components.Commons.NkRichTextContainer html={post.data.content.body} />
            <div>
                {
                    (post.data.content.tags as ITag[]).map((tag: ITag) => <MyChip tag={tag} />)
                }
            </div>
            <StatsPreview type='post' {...post.data.stats} />
            <p><MyIcon type='clock' /> <NkReactLibrary.Components.Commons.NkLocalizeText text={Utils.CommonUtils.timeContextualize(new Date(post.data.createdAt))} /> </p>
            <p><MyAddressText location={post.data.location} /></p>
            <UserProfilePreview {...post.data.author} />

        </div>
    )
}
