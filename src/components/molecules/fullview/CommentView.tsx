import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap'
import { Comment } from '../../../rest/data/posts'
// import * as Invoker from '../../../utils/factory/invoker'
// import MyRichTextContainer from '../../atoms/MyRichTextContainer'
import * as NkReactLibrary from 'nk-react-library';
import StatsPreview from '../preview/StatsPreview'
import UserProfilePreview from '../preview/UserProfilePreview'
import MyAddressText from '../../atoms/MyAddressText';
import MyIcon from '../../atoms/MyIcon';
import { Utils } from 'nk-js-library';



export default function CommentView({ comment, authorView }: {
    comment: Comment,
    authorView: boolean
}) {

    return (
        <div>
            <i><NkReactLibrary.Components.Commons.NkLocalizeText text={comment.data.context.toUpperCase()} /></i>
            <br />
            <Row>
                <Col><NkReactLibrary.Components.Commons.NkRichTextContainer html={comment.data.content} /></Col>
                {authorView && <Col xs='auto'><NkReactLibrary.Components.Commons.NkDropdownMenu menu={[{
                    label: 'Edit',
                    onClick: () => {
                        NkReactLibrary.Utils.NkReactUtils.Redirect.redirect(`/post/${comment.data.postId}/comment/${comment.data._id}/update`);
                    }
                }, {
                    label: 'Delete',
                    onClick: () => {
                        NkReactLibrary.Utils.NkReactUtils.Redirect.redirect(`/post/${comment.data.postId}/comment/${comment.data._id}/delete`);
                    }
                }]} /></Col>}
            </Row>
            <StatsPreview type='comment' {...comment.data.stats} />
            <p><MyIcon type='clock' /> <NkReactLibrary.Components.Commons.NkLocalizeText text={Utils.CommonUtils.timeContextualize(new Date(comment.data.createdAt))} /> </p>
            <MyAddressText location={comment.data.location} />
            <UserProfilePreview {...comment.data.author} />
        </div>
    )
}
